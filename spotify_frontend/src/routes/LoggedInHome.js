import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextwithHover';
import { useState } from 'react';
import {Howl, Howler} from 'howler';
import LoggedInContainer from '../containers/LoggedInContainer';









const focusCardsData = [
  {title:'Metropolitan Dream' ,
   desc:'Focus with deep techno and tech house',
   imgUrl:'https://images.unsplash.com/photo-1701822839967-06308ce8f99c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Tree House' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1589138193516-8fedb70ca778?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Moonlight Road' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Beach Ecstasy' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701443478334-c1a4bfda91ff?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'TranquilAqua' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701676566598-75ce4b488597?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const SpotifyPlaylistCardData = [
  {title:'Mathematical Melody' ,
   desc:'Focus with deep techno and tech house',
   imgUrl:'https://images.unsplash.com/photo-1516381548400-349d680edb56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Tree House' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1589138193516-8fedb70ca778?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Moonlight Road' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Beach Ecstasy' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701443478334-c1a4bfda91ff?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'TranquilAqua' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701676566598-75ce4b488597?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];
 
const LoggedInHomeComponent=()=>{
  return(
    <LoggedInContainer  currentActiveWindow='home'>

    <PlaylistView titleText='Focus' cardsData={focusCardsData}/>
    <PlaylistView titleText='Spotify Hits' cardsData={SpotifyPlaylistCardData}/>
    <PlaylistView titleText='Sound of India' cardsData={focusCardsData}/>

  </LoggedInContainer>

  );
  
  
};

// const LoggedInHomeComponent = () => {


//   const [soundPlayed, setSoundPlayed]= useState(null);
//   const [isPaused, setIsPaused]= useState(true);
    
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

//   const pauseSound=()=>{
//     soundPlayed.pause();
  
//   }

//   const togglePlayPause=()=>{
//     if(isPaused)
//     {
//       playSound('https://res.cloudinary.com/dmq3yx80u/video/upload/v1702198250/xrozlrserew5a1nlbuc6.mp3');
//       setIsPaused(false);
//     }
//     else
//     {
//       pauseSound();
//       setIsPaused(true);
//     }
//   }




//   return (
//     <div className='h-full w-full bg-app-black'>
//       <div className='h-9/10 w-full flex'>
//           {/* Left Panel - 20%*/}
//           <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>
//             <div>
//                 <div className='p-6'>
//                     <Icon icon="logos:spotify"  width='145'/>
//                 </div>
//                 <div className='py-5'>
//                     <IconText displaytext={'Home'} iconname={"material-symbols:home"} active></IconText>
//                     <IconText displaytext={'Search'} iconname={"material-symbols:search"}></IconText>
//                     <IconText displaytext={'Your Library'} iconname={"fluent:library-24-filled"}></IconText>
//                     <IconText displaytext={'My music'} iconname={"mingcute:music-2-fill"}></IconText>
//                 </div>
//                 <div className='pt-7'>
//                     <IconText displaytext={'Create Playlist'} iconname={"basil:add-solid"}></IconText>
//                     <IconText displaytext={'Liked Songs'} iconname={"icon-park-solid:like"}></IconText>
                    
//                 </div>
//             </div>
            
//             <div className="px-5">
//                 <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                     <Icon icon="bi:globe" />
//                     <div className="ml-2 text-sm font-semibold">
//                         English
//                     </div>
//                 </div>
//             </div>
            
            

//           </div>
//           {/* Right Panel -80% */}
//           <div className='h-full w-4/5 bg-app-black overflow-auto'>
//                 {/* Navbar */}
//                 <div className='w-full h-1/10 bg-black bg-opacity-40 flex flex items-center justify-end p-5'>
//                   <div className='w-1/2 flex '>
//                     <div className='w-3/5 flex justify-around items-center '>
//                       <TextwithHover displaytext={'Premium'}/>
//                       <TextwithHover displaytext={'Support'}/>
//                       <TextwithHover displaytext={'Download'}/>
//                       <div className='h-1/2 border-r border-white'></div>
//                     </div>
//                     <div className='w-2/5 flex justify-around'>
//                         <TextwithHover displaytext={'Upload Song'}/>
//                         <div className='bg-white w-10 h-10 rounded-full p-1 flex items-center justify-center font-semibold cursor-pointer'>
//                           <button> YS</button>
//                         </div>
//                     </div>
                    
                    

//                   </div>
                

//                 </div>
//                 {/* Song Cards */}
//                 <div className='overflow-auto'>
//                   <PlaylistView titleText='Focus' cardsData={focusCardsData}/>
//                   <PlaylistView titleText='Spotify Hits' cardsData={SpotifyPlaylistCardData}/>
//                   <PlaylistView titleText='Sound of India' cardsData={focusCardsData}/>
//                 </div>
//           </div>
//       </div>
//       <div className='w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4'>
//         {/* This div is the current playing song controls */}
//           <div className='w-1/4 flex items-center'>
//               <img src='https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//                 alt='Current Somg Thumbnail'
//                 className='h-14 w-14 rounded'></img>
//             <div className='pl-4'>
//               <div className='text-sm hover:underline cursor-pointer'>Curtains</div>
//               <div className='text-xs text-gray-400 hover:underline cursor-pointer'>Ed Sheeran</div>
//             </div>
//           </div>
//           <div className='w-1/2 flex justify-center h-full flex-col items-center'>
//             <div className='flex w-1/3 justify-between items-center'>
//               {/* Controls */}
//               <Icon icon="ph:shuffle-bold" fontSize={30} className='cursor-pointer text-gray-500 hover:text-white'/>
//               <Icon icon="fluent:previous-20-filled"fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' />
//               <Icon icon={isPaused ? "mingcute:play-fill":"material-symbols:pause"}fontSize={50} className='cursor-pointer text-gray-500 hover:text-white' onClick={()=>{togglePlayPause();}} />
//               <Icon icon="fluent:next-20-filled"fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' />
//               <Icon icon="cil:loop"fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' />

//             </div>
//             <div>
//               {/* Progress Bar */}
//             </div>
//           </div>
//           <div className='w-1/4 flex justify-end'>Hi</div>
//       </div>
      
//     </div>
//   )
// }


const PlaylistView = ({titleText, cardsData}) => {
  return (
    <div className='text-white p-8 mt-4'>
      <div className='text-2xl font-semibold mb-5'> {titleText}</div>
      <div className='w-full flex justify-between space-x-4'>
           {/* Cards Data will be an array */}
           {
             cardsData.map((item) => {
              return(
                <Card title={item.title} desc={item.desc} imgUrl={item.imgUrl}/>

              );

            })

           }
           
           {/* <Card title='Metropolitan Dream' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701822839967-06308ce8f99c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Tree House' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1589138193516-8fedb70ca778?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Moonlight Road' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Beach Ecstasy' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701443478334-c1a4bfda91ff?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Tranquilaqua' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701676566598-75ce4b488597?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card> */}
      </div>
    </div>
  )
}

const Card = ({title,desc, imgUrl}) => {
  return (
    <div className='bg-black bg-opacity-40 w-1/5 px-6 py-2 rounded-lg'>
      <div className='py-4'>
            <img className='w-full rounded-md' src={imgUrl}></img>
      </div>
      <div className='text-white font-semibold py-3'> {title} </div>
      <div className='text-gray-500 text-sm'>{desc}</div>

      
    </div>
  )
}



export default LoggedInHomeComponent;
