import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const Player = ({ activeSong }) => {
    const { name, artist, cover, audio } = activeSong[0];
    const [isPlaying, setIsPlaying] = useState('false');
    const playHandler = () => {
        const audioElement = document.getElementById('playing-song');
        console.log(audioElement.duration);
        if (isPlaying) {
            audioElement.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioElement.play();
            setIsPlaying(!isPlaying);
        }
    }
    return (
        <div className="player-container">
            <div className="timer-controls">
                <p>start time</p>
                <input type="range" />
                <p>end time</p>
            </div>
            <div className="play-controls">
                <FontAwesomeIcon className="skip-backward" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playHandler} className="play" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
            </div>
            <audio id="playing-song" src={audio} />
        </div>
    );
}
export default Player;