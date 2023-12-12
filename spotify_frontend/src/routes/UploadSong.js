import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextwithHover';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useNavigate } from 'react-router-dom';
import LoggedInContainer from '../containers/LoggedInContainer';



const UploadSongComponent = () => {
    // console.log(window);
    // console.log(window.cloudinary);
    const [name,setName]= useState('');
    const[thumbnail,setThumbnail]= useState('');
    const [playlistUrl, setPlaylistUrl]= useState('');
    const [uploadedSongFileName, setUploadedSongFileName]= useState();
    const navigate= useNavigate();

    const submitSong= async()=>{
      const data={name, thumbnail, track: playlistUrl};
      const response = await makeAuthenticatedPOSTRequest('/song/create',data);
      if(!response)
      {
        alert("Failure to Upload Song");
        return;
      }
      alert("Song successfully uploaded to Database");
      navigate('/home');

    }

  return (
    <LoggedInContainer>
       <div className='overflow-auto p-8'>
              <div className='text-2xl font-semibold mb-5 text-white mt-8'> Upload Your Song</div>
              <div className='w-2/3 flex space-x-3'>
                  <div className='w-1/2'>
                      <TextInput label='Song Name' placeholder='Song Name' labelClassName={'text-white'} value={name} setValue={setName}></TextInput>
                  </div>
                  <div className='w-1/2'>
                      <TextInput label='Thumbnail' placeholder='Thumbnail' labelClassName={'text-white'} value={thumbnail} setValue={setThumbnail}></TextInput>
                </div>
                
                
              </div>
              <div className='py-5'>
                {
                  uploadedSongFileName ? <div className='bg-white rounded-full p-3 w-1/3'> {uploadedSongFileName.substring(0.35)}... </div> : 
                  <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}></CloudinaryUpload>
                  
                }
                
            </div>
            <div className='bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold' onClick={()=>{submitSong()}}>
              Submit Song
            </div>
            
        </div>

    </LoggedInContainer>
    // <div className='h-full w-full flex flex-row'>
    //   {/* Left Panel - 20%*/}
    //   <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>
    //     <div>
    //         <div className='p-6'>
    //             <Icon icon="logos:spotify"  width='145'/>
    //         </div>
    //         <div className='py-5'>
    //             <IconText displaytext={'Home'} iconname={"material-symbols:home"} active></IconText>
    //             <IconText displaytext={'Search'} iconname={"material-symbols:search"}></IconText>
    //             <IconText displaytext={'Your Library'} iconname={"fluent:library-24-filled"}></IconText>
    //             <IconText displaytext={'My music'} iconname={"mingcute:music-2-fill"}></IconText>
    //         </div>
    //         <div className='pt-7'>
    //             <IconText displaytext={'Create Playlist'} iconname={"basil:add-solid"}></IconText>
    //             <IconText displaytext={'Liked Songs'} iconname={"icon-park-solid:like"}></IconText>
                
    //         </div>
    //     </div>
        
    //     <div className="px-5">
    //         <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
    //             <Icon icon="bi:globe" />
    //             <div className="ml-2 text-sm font-semibold">
    //                 English
    //             </div>
    //         </div>
    //     </div>
        
        

    //   </div>
    //   {/* Right Panel -80% */}
    //   <div className='h-full w-4/5 bg-app-black overflow-auto'>
    //         {/* Navbar */}
    //         <div className='w-full h-1/10 bg-black bg-opacity-40 flex flex items-center justify-end p-5'>
    //           <div className='w-1/2 flex '>
    //             <div className='w-3/5 flex justify-around items-center '>
    //               <TextwithHover displaytext={'Premium'}/>
    //               <TextwithHover displaytext={'Support'}/>
    //               <TextwithHover displaytext={'Download'}/>
    //               <div className='h-1/2 border-r border-white'></div>
    //             </div>
    //             <div className='w-2/5 flex justify-around'>
    //                 <TextwithHover displaytext={'Upload Song'}/>
    //                 <div className='bg-white w-10 h-10 rounded-full p-1 flex items-center justify-center font-semibold cursor-pointer'>
    //                   <button> YS</button>
    //                 </div>
    //             </div>
                
                

    //           </div>
             

    //         </div>
    //         {/* Song Cards */}
    //         <div className='overflow-auto p-8'>
    //             <div className='text-2xl font-semibold mb-5 text-white mt-8'> Upload Your Song</div>
    //             <div className='w-2/3 flex space-x-3'>
    //                 <div className='w-1/2'>
    //                     <TextInput label='Song Name' placeholder='Song Name' labelClassName={'text-white'} value={name} setValue={setName}></TextInput>
    //                 </div>
    //                 <div className='w-1/2'>
    //                     <TextInput label='Thumbnail' placeholder='Thumbnail' labelClassName={'text-white'} value={thumbnail} setValue={setThumbnail}></TextInput>
    //                 </div>
                    
                    
    //             </div>
    //             <div className='py-5'>
    //                 {
    //                   uploadedSongFileName ? <div className='bg-white rounded-full p-3 w-1/3'> {uploadedSongFileName.substring(0.35)}... </div> : 
    //                   <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}></CloudinaryUpload>
                      
    //                 }
                    
    //             </div>
    //             <div className='bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold' onClick={()=>{submitSong()}}>
    //               Submit Song
    //             </div>
               
    //         </div>
    //   </div>
    // </div>
  )
}





export default UploadSongComponent;
