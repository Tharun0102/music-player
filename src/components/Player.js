import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const Player = ({ activeSong }) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: "00 : 00",
    duration: "00 : 00"
  });
  const { audio } = activeSong;
  const playHandler = () => {
    if (isPlaying) {
      audioElement.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioElement.current.play();
      setIsPlaying(!isPlaying);
    }
  }
  const timeUpdateHandler = (e) => {
    const time = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      currentTime: time,
      duration: duration
    });
  }
  const getTime = (time) => {
    return (
      '0' + Math.floor(time / 60) + ' : ' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  }
  const inputDragHandler = (e) => {
    audioElement.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    });
  }
  return (
    <div className="player-container">
      <div className="timer-controls">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={inputDragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-controls">
        <FontAwesomeIcon
          className="skip-backward"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioElement}
        src={audio} />
    </div>
  );
}
export default Player;