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
  const [playButton, setPlayButton] = useState(false);
  const audioElement = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: "00 : 00",
    duration: 0,
    percentage: 0
  });
  return (
    <div className={`app ${libraryState ? "library-active" : ""}`}>
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song playButtonActive={playButton} activeSong={currentSong} />
      <Player
        setPlayButtonActive={setPlayButton}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioElement={audioElement}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        setPlayButtonActive={setPlayButton}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElement={audioElement}
        libraryState={libraryState}
        setLibraryState={setLibraryState}
      />
    </div>
  );
}


export default App;
