import React from 'react'
import { useState, useEffect } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';

const AddToPlaylistModal = ({closeModal, addSongToPlaylist}) => {

    const [playlistDetails, setPlaylistDetails]= useState([]);
    useEffect(()=>{
        const getPlaylist=async()=>{
            const response= await makeAuthenticatedGETRequest('/playlist/get/me');
            // console.log(response.data);
            setPlaylistDetails(response.data);


        };

        getPlaylist();

    },[]);

  return (
    <div className='absolute bg-black bg-opacity-60 w-screen h-screen flex justify-center items-center' onClick={closeModal}>
    <div className='w-1/3 rounded-md bg-app-black p-6' onClick={(e)=>{e.stopPropagation()}}> 
       <div className='text-white font-semibold mb-7 text-lg flex items-center justify-center'> Select Playlist</div>
       <div className='space-y-5 flex flex-col items-center justify-center'>
        {
            playlistDetails.map((item)=>{
                return <PlaylistListComponent info={item} addSongToPlaylist={addSongToPlaylist}/>
            })
        }
       </div>

        
    </div>
  
    </div>
  )
}

const PlaylistListComponent=({info, addSongToPlaylist})=>{
    return(
        <div className='bg-app-black w-full flex items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 hover:rounded cursor-pointer p-3' onClick={()=>{addSongToPlaylist(info._id);}}>
            <div>
                <img src={info.thumbnail} className='w-10 h-10 rounded'></img>
            </div>
            <div className='text-white font-semibold text-sm'>{info.name}</div>

        </div>

    )
    

}

export default AddToPlaylistModal;
