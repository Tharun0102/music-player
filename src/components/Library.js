import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ setPlayButtonActive, songs, setSongs, setCurrentSong, isPlaying, setIsPlaying, audioElement, libraryState, setLibraryState }) => {
  return (
    <div className={`library ${libraryState ? "lib-active" : ""}`}>
      <div className="lib-title">
        <h2 >Library</h2>
        <div onClick={() => setLibraryState(false)} className="cancel-option">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="library-songs">
        {
          songs.map((song) => {
            return (
              <LibrarySong
                setPlayButtonActive={setPlayButtonActive}
                songs={songs}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong}
                song={song}
                key={song.id}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioElement={audioElement}
              />
            );
          })
        }
      </div>
    </div>
  );
}


export default Library;
