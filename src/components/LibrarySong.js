import React from 'react';

const LibrarySong = ({ setPlayButtonActive, songs, setSongs, setCurrentSong, song, isPlaying, setIsPlaying, audioElement }) => {
    const songClickHandler = async (e) => {
        await setCurrentSong(song);
        setIsPlaying(true);
        setSongs(songs.map((s) => {
            if (s.id === song.id) {
                return {
                    ...s,
                    active: true
                };
            } else {
                return {
                    ...s,
                    active: false
                };
            }
        })
        );
        audioElement.current.play();
        setPlayButtonActive(true);
    }

    return (
        <div onClick={songClickHandler} className={`library-song ${song.active ? "song-active" : ""}`}>
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
