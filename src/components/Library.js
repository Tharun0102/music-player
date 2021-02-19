import React from 'react';
import LibrarySong from './LibrarySong';
import { v4 as uuidv4 } from 'uuid';

const Library = ({ songs }) => {
  console.log(songs);
  return (
    <div className="library">
      <div className="library-songs">
        {
          songs.map((song) => {
            return <LibrarySong song={song} key={uuidv4()} />
          })
        }
      </div>
    </div>
  );
}


export default Library;
