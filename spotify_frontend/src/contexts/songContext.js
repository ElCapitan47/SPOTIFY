import { createContext} from "react";

//React-context is a library which is used to create a global variable/parameter/object which can be accessed by all files below it
//irrespective of the depth of their sub-domain. 
//We create a react-context here to store the details of the current playing song=> so that the current song can continue to play no
//matter to which route/component we visit. All routes/components will have access to play this song, not just myMusic.js which stores
//the playSound function

const songContext= createContext({
    currentSong: null,
    setCurrentSong: (currentSong)=>{},
    soundPlayed: null, 
    setSoundPlayed: ()=>{},
    isPaused: null, 
    setIsPaused: ()=>{},
});

export default songContext;