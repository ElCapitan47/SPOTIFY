import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import './output.css';
import LoginComponent from './routes/Login';
import SignUpComponent from './routes/SignUp';
import HomeComponent from './routes/Home';
import SearchPageComponent from './routes/SearchPage';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSongComponent from './routes/UploadSong';
import { useCookies } from 'react-cookie';
import MyMusicComponent from './routes/MyMusic';
import songContext from './contexts/songContext';
import { useState } from 'react';
import LibraryComponent from './routes/Library';
import SinglePlaylistViewComponent from './routes/SinglePlaylistView';
function App() {

  const [cookie,setCookie]= useCookies(["token"]);
  const [currentSong, setCurrentSong]= useState(null);
  const [soundPlayed, setSoundPlayed]= useState(null);
  const [isPaused, setIsPaused]= useState(true);


  return (
    <div className="App">
      <div className='w-screen h-screen font-poppins'>
        {/* w-screen and h-screen are tailwind css classes which tell react to consider the width and height of the whole screen and make it parent class
        By default parent class is a restricted div, not full window. To make parent class full window, we use w-screen and h-screen
        All components which use w-full, h-full, w-85%, h-85% will actually be full or 85% of the parent class which will be set to the full screen
        by this w-screen h-screen command */}
        <BrowserRouter>
        {
          cookie.token ? (
            <songContext.Provider value={{currentSong, setCurrentSong, soundPlayed,setSoundPlayed, isPaused,setIsPaused}}>
              <Routes>
              {/* When logged in , theses are the routes to be followed */}
              {/* Note that path and element come inside <>, not in between <> and </> */}
              {/* <Route path='/' element={<HelloComponent/>}></Route>   */}
            
                  {/* All routes inside the songContext.provider tags will have access to play/change the song from their respective webpages */}
                  <Route path='/home' element={<LoggedInHomeComponent/>}></Route>
                  <Route path='/uploadsong' element={<UploadSongComponent/>}></Route>
                  <Route path='/mymusic' element={<MyMusicComponent/>}></Route>
                  <Route path='/search' element={<SearchPageComponent/>}></Route>
                  <Route path='/library' element={<LibraryComponent/>}></Route>
                  <Route path='/playlist/:playlistId' element={<SinglePlaylistViewComponent/>}></Route>
                  <Route path='*' element={<Navigate to='/home'/>}></Route>
              
                  
              </Routes>
            </songContext.Provider>
          ): (
            <Routes>
               {/* When logged out , theses are the routes to be followed */}
          {/* Note that path and element come inside <>, not in between <> and </> */}
          {/* <Route path='/' element={<HelloComponent/>}></Route>   */}
          <Route path='/login' element={<LoginComponent/>}></Route>
          <Route path='/signup' element={<SignUpComponent/>}></Route>
          <Route path='/home' element={<HomeComponent/>}></Route>
          <Route path='*' element={<Navigate to='/login'/>}></Route>
          
    
        </Routes>
          )
        }
        
        
        </BrowserRouter>
      </div>
      
      
    </div>
  );
}

export default App;
