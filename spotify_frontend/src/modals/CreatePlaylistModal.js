import React from 'react'
import TextInput from '../components/shared/TextInput'
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';

const CreatePlaylistModal = ({closeModal}) => {
    const [playlistName, setPlaylistName]= useState('');
    const [playlistThumbnail, setPlaylistThumbnail]= useState('');

    const createPlaylist=async()=>{
        const response= await makeAuthenticatedPOSTRequest('/playlist/create', {name: playlistName, thumbnail: playlistThumbnail, songs: []});
        if(response._id)
        {
            alert('Playlist successfully created');
            closeModal();
        }

    }

  return (
    <div className='absolute bg-black bg-opacity-60 w-screen h-screen flex justify-center items-center' onClick={closeModal}>
        <div className='w-1/3 rounded-md bg-app-black p-6' onClick={(e)=>{e.stopPropagation()}}> 
           <div className='text-white font-semibold mb-7 text-lg flex items-center justify-center'> Create Playlist</div>
           <div className='space-y-5 flex flex-col items-center justify-center'>
            <TextInput label='Playlist Name' placeholder='Enter Playlist Name' labelClassName={'text-white'} value={playlistName} setValue={setPlaylistName}></TextInput>
            <TextInput label='Thumbnail' placeholder='Enter Thumbnail' labelClassName={'text-white'} value={playlistThumbnail} setValue={setPlaylistThumbnail}></TextInput>
            <div className='bg-green-700 bg-opacity-80 text-white w-1/4 py-2 rounded-md font-semibold flex items-center justify-center cursor-pointer ' onClick={()=>{createPlaylist();}}>
                Create
            </div>
           </div>

            
        </div>
      
    </div>
  )
}

export default CreatePlaylistModal
