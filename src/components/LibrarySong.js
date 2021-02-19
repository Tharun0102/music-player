import React from 'react';

const LibrarySong = ({ song }) => {
    return (
        <div className="library-song">
            <div className="song-left">
                <img src={song.cover} alt={"A song"} />
            </div>
            <div className="song-right">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}


export default LibrarySong;
