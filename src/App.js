import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import songLibrary from './Util';

function App() {
  const songs = songLibrary();
  return (
    <div className="App">
      <Song activeSong={songs.filter((e) => e.active === true)} />
      <Player activeSong={songs.filter((e) => e.active === true)} />
    </div>
  );
}


export default App;
