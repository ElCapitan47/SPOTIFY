import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextwithHover';
import { useState } from 'react';
import {Howl, Howler} from 'howler';
import { useContext } from 'react';
import songContext from '../contexts/songContext';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react'; //Quite similar to useeffect hook
import { useRef } from 'react';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlaylistModal';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { Link } from 'react-router-dom';


//We know that all our pages like myMusic.js, LoggedInHome.js, Search.js share a common UI design as they have the same design and structure
//for left panel, navbar and current playing song control at bottom.
//So instead of copying the code for these three (left panel, navbar, cureent song controls) in each file, what we can do is store the code for navbar,left panel and song control
//in this container file LoggedInContainer.js
//Then only render the code on the right panel which is different for each file by declaring <LoggedInContainer> and putting that code inside
//it. 
//The code written in between <LoggedInContainer> tags is stored in a prop called 'children' and hence can be used in the place where
//the code for the right panel was for each file (see Line 122 of this page)

const LoggedInContainer = ({children, currentActiveWindow}) => {

  const [createPlaylistModalOpen, setCreatePlaylistModalOpen]= useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen]= useState(false);

  const {currentSong, setCurrentSong, soundPlayed,setSoundPlayed, isPaused,setIsPaused} = useContext(songContext);
  

  const firstUpdate= useRef(true);

  useLayoutEffect(()=>{
    if(firstUpdate.current)             //UseLayoutEffect is never called in the first render
    {
      firstUpdate.current=false;
      return;
    }
    if(!currentSong)
    {
        return;
    }
    console.log('Here');
    changeSong(currentSong.track);

  },[currentSong && currentSong.track]);

  const addSongToPlaylist= async (playlistId)=> {
    const songId= currentSong._id;
    const payload={playlistId,songId};

    const response= await makeAuthenticatedPOSTRequest('/playlist/add/song',payload);
    // console.log(response);
    if(response._id)
    {
      alert('Song successfully added to playlist');
      setAddToPlaylistModalOpen(false);
    }

  }

  const playSound=()=>{
    //stop currebtly playing song to when starting a new song play
    if(!soundPlayed )
    {
        return;
    }
    soundPlayed.play();
   

  }
    
  //Howler is a library in node which allows us to play audio files
  const changeSong=(songSrc)=>{
    //stop currebtly playing song to when starting a new song play
    if(soundPlayed)
    {
        soundPlayed.stop();
    }
    //playing a new song
    var sound = new Howl({
        src: [songSrc],
        html5: true
      });
      setSoundPlayed(sound);
      sound.play();
      setIsPaused(false);

  }

  const pauseSound=()=>{
    soundPlayed.pause();
  
  }

  const togglePlayPause=()=>{
    if(isPaused)
    {
      playSound();
      setIsPaused(false);
    }
    else
    {
      pauseSound();
      setIsPaused(true);
    }
  }




  return (
    <div className='h-full w-full bg-app-black'>

      {createPlaylistModalOpen && <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}

      {addToPlaylistModalOpen && <AddToPlaylistModal closeModal={()=>{setAddToPlaylistModalOpen(false)}} addSongToPlaylist={addSongToPlaylist}/>}

      <div className={` ${currentSong? 'h-9/10' : 'h-full'} w-full flex`}>
          {/* Left Panel - 20%*/}
          <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>
            <div>
                <div className='p-6'>
                    <Icon icon="logos:spotify"  width='145'/>
                </div>
                <div className='py-5'>
                    <IconText displaytext={'Home'} iconname={"material-symbols:home"} active={currentActiveWindow=='home'} targetLink={'/home'}></IconText>
                    <IconText displaytext={'Search'} iconname={"material-symbols:search"} targetLink={'/search'} active={ currentActiveWindow=='search'}></IconText>
                    <IconText displaytext={'Your Library'} iconname={"fluent:library-24-filled"}  targetLink={'/library'} active={ currentActiveWindow=='yourLibrary'} ></IconText>
                    <IconText displaytext={'My music'} iconname={"mingcute:music-2-fill"} targetLink={'/mymusic'} active={ currentActiveWindow=='myMusic'}></IconText>
                </div>
                <div className='pt-7'>
                    <IconText displaytext={'Create Playlist'} iconname={"basil:add-solid"} onClick={()=>{setCreatePlaylistModalOpen(true);}}></IconText>
                    <IconText displaytext={'Liked Songs'} iconname={"icon-park-solid:like"}></IconText>
                    
                </div>
            </div>
            
            <div className="px-5">
                <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                    <Icon icon="bi:globe" />
                    <div className="ml-2 text-sm font-semibold">
                        English
                    </div>
                </div>
            </div>
            
            

          </div>
          {/* Right Panel -80% */}
          <div className='h-full w-4/5 bg-app-black overflow-auto'>
                {/* Navbar */}
                <div className='w-full h-1/10 bg-black bg-opacity-40 flex flex items-center justify-end p-5'>
                  <div className='w-1/2 flex '>
                    <div className='w-3/5 flex justify-around items-center '>
                      <TextwithHover displaytext={'Premium'}/>
                      <TextwithHover displaytext={'Support'}/>
                      <TextwithHover displaytext={'Download'}/>
                      <div className='h-1/2 border-r border-white'></div>
                    </div>
                    <div className='w-2/5 flex justify-around'>
                      <Link to='/uploadsong' className='flex justify-center items-center'>
                           <TextwithHover displaytext={'Upload Song'}/>
                      </Link>
                        
                        <div className='bg-white w-10 h-10 rounded-full p-1 flex items-center justify-center font-semibold cursor-pointer'>
                          <button> YS</button>
                        </div>
                    </div>
                    
                    

                  </div>
                

                </div>
                {/* Song Cards */}
                <div className='overflow-auto'>
                    {children}
                </div>
          </div>
      </div>
      {
        currentSong &&

        <div className='w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4'>
        {/* This div is the current playing song controls */}
          <div className='w-1/4 flex items-center'>
              <img src={currentSong.thumbnail} 
                alt='Current Somg Thumbnail'
                className='h-14 w-14 rounded'></img>
            <div className='pl-4'>
              <div className='text-sm hover:underline cursor-pointer'>{currentSong.name}</div>
              <div className='text-xs text-gray-400 hover:underline cursor-pointer'>{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
            </div>
          </div>
          <div className='w-1/2 flex justify-center h-full flex-col items-center'>
            <div className='flex w-1/3 justify-between items-center'>
              {/* Controls */}
              <Icon icon="ph:shuffle-bold" fontSize={30} className='cursor-pointer text-gray-500 hover:text-white'/>
              <Icon icon="fluent:previous-20-filled"fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' />
              <Icon icon={isPaused ? "mingcute:play-fill":"material-symbols:pause"}fontSize={50} className='cursor-pointer text-gray-500 hover:text-white' onClick={()=>{togglePlayPause();}} />
              <Icon icon="fluent:next-20-filled"fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' />
              <Icon icon="cil:loop"fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' />

            </div>
            <div>
              {/* Progress Bar */}
            </div>
          </div>
          <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'>
              <Icon icon="mdi:heart" fontSize={25} className='cursor-pointer text-gray-500 hover:text-white' /> 
              <Icon icon="ic:baseline-playlist-add" fontSize={30} className='cursor-pointer text-gray-500 hover:text-white' onClick={()=>{setAddToPlaylistModalOpen(true);}} />
          </div>
      </div>

      }
      
      
    </div>
  )
}





export default LoggedInContainer;
