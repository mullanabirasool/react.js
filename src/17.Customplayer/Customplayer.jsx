import React, { useRef, useState } from 'react'
import ReactPlayer from "react-player"
import screenfull from 'screenfull'
import './Customplayer.css'

const App = () => {

  const playerRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerWrapperRef.current)
    }
  }

  function handlePlayPause() {
    setIsPlaying(!isPlaying)
  }

  function handleMuteUnMute() {
    setIsMuted(!isMuted)
  }

  function handleVolumeChange(e) {
    setVolume(parseFloat(e.target.value))
  }

  function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "00:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className='App' >
      <ReactPlayer
        ref={playerRef}
        src="https://www.youtube.com/watch?v=3xKx9EHlzTY"
        playing={isPlaying}
        muted={isMuted}
        volume={volume}
        width="100%"
        height="500px"
        onDuration={(d) => setDuration(d)}
        onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)}
      />

      <div className='player-bar'>
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          step={0.1}
          value={currentTime}
          onChange={(e) => {
            const newTime = parseFloat(e.target.value)
            setCurrentTime(newTime)
            playerRef.current.seekTo(newTime, "seconds")
          }}
        />
        <span>{formatTime(duration)}</span>
      </div>

      <div className="controls">
        <div className="controls-left">
          <button onClick={handleMuteUnMute}>{isMuted ? "Unmute" : "Mute"}</button>
          <input
            max={1}
            min={0}
            step={0.1}
            type="range"
            value={volume}
            onChange={handleVolumeChange}
            className='volume'
          />
        </div>
        <div className="controls-center">
          <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
        <div className="controls-right">
          <button onClick={toggleFullscreen}>Fullscreen</button>
        </div>
      </div>
    </div>
  )
}

export default App
