import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextwithHover';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleSongCard from '../components/shared/SingleSongCard';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import {Howl, Howler} from 'howler';
import LoggedInContainer from '../containers/LoggedInContainer';


const MyMusicComponent= ()=>{
  const [songData, setSongData]= useState([]);

  //We can't use async directly on useEffect, so we create a getData async function inside useffect and then call await inside it
  useEffect(()=>{
    //fetch data
    const getData= async ()=>{
        const response= await makeAuthenticatedGETRequest('/song/get/mysongs');
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data);
        setSongData(response.data);
        


    };
    getData(); //Don't forget to call getData
    
    

  },[]);
 
  return(
    <LoggedInContainer currentActiveWindow='myMusic'>
      <div className='text-white text-xl font-semibold pb-4 pl-8 pt-8'> My Songs</div>
      <div className='space-y-3 overflow-auto pl-8'>
          {
              songData.map((item)=>{
                  return <SingleSongCard info={item} playSound={()=>{}}></SingleSongCard>
              })
          }
      </div>

    </LoggedInContainer>

 
  );
};


// const MyMusicComponent = () => {
    
//   const [songData, setSongData]= useState([]);
//   const [soundPlayed, setSoundPlayed]= useState(null);
  
//   //Howler is a library in node which allows us to play audio files
//   const playSound=(songSrc)=>{
//     //stop currebtly playing song to when starting a new song play
//     if(soundPlayed)
//     {
//         soundPlayed.stop();
//     }
//     //playing a new song
//     var sound = new Howl({
//         src: [songSrc],
//         html5: true
//       });
//       setSoundPlayed(sound);
//       sound.play();

//   }

  

//   //We can't use async directly on useEffect, so we create a getData async function inside useffect and then call await inside it
//   useEffect(()=>{
//     //fetch data
//     const getData= async ()=>{
//         const response= await makeAuthenticatedGETRequest('/song/get/mysongs');
//         // console.log(response);
//         // console.log(response.data);
//         // console.log(response.data.data);
//         setSongData(response.data);
        


//     };
//     getData(); //Don't forget to call getData
    
    

//   },[]);
 
//   return (

//     <div className='h-full w-full flex flex-row'>
//       {/* Left Panel - 20%*/}
//       <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>
//         <div>
//             <div className='p-6'>
//                 <Icon icon="logos:spotify"  width='145'/>
//             </div>
//             <div className='py-5'>
//                 <IconText displaytext={'Home'} iconname={"material-symbols:home"}></IconText>
//                 <IconText displaytext={'Search'} iconname={"material-symbols:search"}></IconText>
//                 <IconText displaytext={'Your Library'} iconname={"fluent:library-24-filled"}></IconText>
//                 <IconText displaytext={'My music'} iconname={"mingcute:music-2-fill"} active></IconText>
//             </div>
//             <div className='pt-7'>
//                 <IconText displaytext={'Create Playlist'} iconname={"basil:add-solid"}></IconText>
//                 <IconText displaytext={'Liked Songs'} iconname={"icon-park-solid:like"}></IconText>
                
//             </div>
//         </div>
        
//         <div className="px-5">
//             <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                 <Icon icon="bi:globe" />
//                 <div className="ml-2 text-sm font-semibold">
//                     English
//                 </div>
//             </div>
//         </div>
        
        

//       </div>
//       {/* Right Panel -80% */}
//       <div className='h-full w-4/5 bg-app-black overflow-auto'>
//             {/* Navbar */}
//             <div className='w-full h-1/10 bg-black bg-opacity-40 flex flex items-center justify-end p-5'>
//               <div className='w-1/2 flex '>
//                 <div className='w-3/5 flex justify-around items-center '>
//                   <TextwithHover displaytext={'Premium'}/>
//                   <TextwithHover displaytext={'Support'}/>
//                   <TextwithHover displaytext={'Download'}/>
//                   <div className='h-1/2 border-r border-white'></div>
//                 </div>
//                 <div className='w-2/5 flex justify-around'>
//                     <TextwithHover displaytext={'Upload Song'}/>
//                     <div className='bg-white w-10 h-10 rounded-full p-1 flex items-center justify-center font-semibold cursor-pointer'>
//                       <button> YS</button>
//                     </div>
//                 </div>
                
                

//               </div>
             

//             </div>
//             {/* Song Cards */}
//             <div className='overflow-auto p-8'>
//                 <div className='text-white text-xl font-semibold pb-4 pl-2'> My Songs</div>
//                 <div className='space-y-3 overflow-auto'>
//                     {
//                         songData.map((item)=>{
//                             return <SingleSongCard info={item} playSound={playSound}></SingleSongCard>
//                         })
//                     }
//                 </div>
                
               
//             </div>
//       </div>
//     </div>
//   )
// }





export default MyMusicComponent;
