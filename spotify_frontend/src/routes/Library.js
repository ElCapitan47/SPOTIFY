import React, { useEffect } from 'react'
import LoggedInContainer from '../containers/LoggedInContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LibraryComponent = () => {
    
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
    <LoggedInContainer currentActiveWindow={'yourLibrary'}>
        <div className='text-white text-xl p-8 font-semibold'> My Playlists</div>
        <div className='py-5 grid gap-5 grid-cols-4 p-8'>
       
           {
             playlistDetails.map((item)=>{
                return <Card title={item.name} desc='' imgUrl={item.thumbnail} id={item._id}></Card>
             })
           }
        </div>
        

    </LoggedInContainer>
      
    
  )
}

const Card = ({title,desc, imgUrl, id}) => {
    const navigate= useNavigate();
    return (
      
        <div className='bg-black bg-opacity-40 w-full px-6 py-2 rounded-lg cursor-pointer' onClick={()=>{navigate('/playlist/' + id)}}>
          <div className='py-4'>
                <img className='w-full rounded-md' src={imgUrl}></img>
          </div>
          <div className='text-white font-semibold py-3'> {title} </div>
          <div className='text-gray-500 text-sm'>{desc}</div>
  
        
        </div>
      
      
    )
  }

export default LibraryComponent;
