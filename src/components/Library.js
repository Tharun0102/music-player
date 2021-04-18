import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ setPlayButtonActive, songs, setSongs, setCurrentSong, isPlaying, setIsPlaying, audioElement, libraryState }) => {
  return (
    <div className={`library ${libraryState ? "lib-active" : ""}`}>
      <h2>Library</h2>
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
