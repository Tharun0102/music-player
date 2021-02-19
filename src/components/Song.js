import React from 'react';

const Song = ({ activeSong }) => {
    const songInfo = activeSong[0];
    const { name, artist, cover } = songInfo;
    return (
        <div className="song-container">
            <div className="song-cover">
                <img src={cover} alt="song-cover" />
            </div>
            <h2>{name}</h2>
            <h2>{artist}</h2>
        </div>
    );
}
export default Song;