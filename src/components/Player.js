import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import playAudio from '../PlayAudio';

const Player = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying, audioElement, setSongs }) => {

  useEffect(() => {
    setSongs(songs.map((s) => {
      if (s.id === currentSong.id) {
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
  }, [currentSong, setSongs]);

  const [songInfo, setSongInfo] = useState({
    currentTime: "00 : 00",
    duration: "0"
  });

  const { audio } = currentSong;
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
      duration: (duration)
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
  const skipBackHandler = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    if ((currentIndex - 1) % songs.length === -1) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, audioElement);
  }
  const skipForwardHandler = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioElement);
  }
  return (
    <div className="player-container">
      <div className="timer-controls">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={inputDragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-controls">
        <FontAwesomeIcon
          onClick={skipBackHandler}
          className="skip-backward"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={skipForwardHandler}
          className="skip-forward"
          size="2x"
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