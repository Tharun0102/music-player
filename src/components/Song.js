import React from 'react';

const Song = ({ activeSong, playButtonActive }) => {
    const { name, artist, cover } = activeSong;
    return (
        <div className="song-container">
            <div className="song-cover">
                <img className={`${playButtonActive ? "play" : ""}`} src={cover} alt="song-cover" />
            </div>
            <h2>{name}</h2>
            <h2>{artist}</h2>
        </div>
    );
}
export default Song;