import React from 'react'
import LoggedInContainer from '../containers/LoggedInContainer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import SingleSongCard from '../components/shared/SingleSongCard';

const SinglePlaylistViewComponent = () => {
    const {playlistId}= useParams();
    const [playlistDetails, setPlaylistDetails]= useState({});

    useEffect(()=>{
        const getDetails=async()=>{
            const response= await makeAuthenticatedGETRequest('/playlist/get/playlist/' + playlistId);
            console.log(response);
            setPlaylistDetails(response);

        };

        getDetails();

    },[]);

  return (
    <LoggedInContainer>
        {
            playlistDetails._id && 
            <div>
                <div className='text-white text-xl font-semibold pb-4 pl-8 pt-8'>Songs</div>
                <div className='space-y-3 overflow-auto pl-8'>
                    {
                        playlistDetails.songs.map((item)=>{
                            return <SingleSongCard info={item} playSound={()=>{}}></SingleSongCard>
                        })
                    }
                    
                </div>

            </div>
        }
      

    </LoggedInContainer>
  )
}

export default SinglePlaylistViewComponent;
