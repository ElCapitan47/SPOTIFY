import React, { useState } from 'react'
import LoggedInContainer from '../containers/LoggedInContainer';
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import SingleSongCard from '../components/shared/SingleSongCard';

const SearchPageComponent = () => {
  const [isInputFocused, setIsInputFocused]= useState(false);
  const [songName, setSongName]= useState('');
  const [songList, setSongList]=useState([]);
  const [isSearchDone, setIsSearchDone]= useState(false);

  const searchSong=async()=>{
    const response= await makeAuthenticatedGETRequest('/song/get/songname/' + songName);
    console.log(response);
    setSongName("");
    setSongList(response.data);
    setIsSearchDone(true);

  }
  return (
    
    <LoggedInContainer currentActiveWindow='search'>
        <div className='w-full py-6 pl-8'>
            <div className={`w-1/3 text-sm p-3 rounded-full bg-black px-5 flex items-center text-white space-x-3 ${isInputFocused ? 'border border-white':''}`}>
                <Icon icon="ic:baseline-search" color='white' className='text-lg'/>
                <input type='text' 
                placeholder='What do you want to listen to?' 
                className='w-full bg-black focus:outline-none' 
                onFocus={()=>{setIsInputFocused(true);} } 
                onBlur={()=>{setIsInputFocused(false);}} 
                value={songName} 
                onChange={(e)=>{setSongName(e.target.value)}} 
                onKeyDown={(e)=>{
                    if(e.key==='Enter')
                    {
                        searchSong();
                    }
                }}></input>
            </div>
            <div className='space-y-3 pt-12'>
                <div className='text-white'> Showing results :</div>
                {songList && 
                    
                        
                    songList.map((item)=>{
                        
                            return <SingleSongCard info={item} key={JSON.stringify(item)}></SingleSongCard>

                    })
                }
                {
                    songList.length==0 && isSearchDone &&
                    <div className='text-white'>No matched results. Try modifying search</div>
                }

            </div>
           
        </div>
       

    </LoggedInContainer>
      
    
  )
}

export default SearchPageComponent;
