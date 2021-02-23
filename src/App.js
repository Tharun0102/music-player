import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import LibraryState from './LibraryState';
import Library from './components/Library';
import { useState, useRef } from 'react';
import Nav from './components/Nav';

function App() {
  const [songs, setSongs] = useState(LibraryState());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryState, setLibraryState] = useState(false);
  const audioElement = useRef(null);
  return (
    <div className="app">
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song activeSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElement={audioElement}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElement={audioElement}
        libraryState={libraryState}
      />
    </div>
  );
}


export default App;
