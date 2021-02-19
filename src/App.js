import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import LibraryState from './Util';
import Library from './components/Library';
import { useState } from 'react';
import LibrarySong from './components/LibrarySong';

function App() {
  const [songs, setSongs] = useState(LibraryState());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="app">
      <Song activeSong={currentSong} />
      <Player activeSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}


export default App;
