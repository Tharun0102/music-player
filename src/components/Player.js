import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ setPlayButtonActive, songs, songInfo, setSongInfo, currentSong, setCurrentSong, isPlaying, setIsPlaying, audioElement, setSongs }) => {

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



  const { audio } = currentSong;
  const playHandler = (e) => {
    if (isPlaying) {
      setPlayButtonActive(false);
      audioElement.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      setPlayButtonActive(true);
      audioElement.current.play();
      setIsPlaying(!isPlaying);
    }
  }
  const timeUpdateHandler = (e) => {
    const time = e.target.currentTime;
    const duration = e.target.duration;
    const percentage = Math.round((Math.round(time) / Math.round(duration)) * 100)
    setSongInfo({
      currentTime: time,
      duration: duration,
      percentage: percentage
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
  const skipBackHandler = async () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    if ((currentIndex - 1) % songs.length === -1) {
      await setCurrentSong(songs[songs.length - 1]);
    } else {
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioElement.current.play();
  }
  const skipForwardHandler = async () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioElement.current.play();
  }
  const songEndHandler = skipForwardHandler;

  //styles
  const track_style = {
    transform: `translateX(${songInfo.percentage}%)`
  }
  return (
    <div className="player-container">
      <div className="timer-controls">
        <p className="start-time">{getTime(songInfo.currentTime)}</p>
        <div style={{ backgroundColor: 'white' }} className="track">
          <input
            onChange={inputDragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={track_style} className="track-helper"></div>
        </div>

        <p className="end-time">{getTime(songInfo.duration)}</p>
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
        src={audio}
        onEnded={songEndHandler}
      />
    </div>
  );
}
export default Player;