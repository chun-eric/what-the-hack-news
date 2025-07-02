import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const AudioPlayer = ({ title, audioSrc, timestamp }) => {
  // sttate variables
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // Play/pause logic
  useEffect(() => {
    const audio = audioRef.current
    // if there is no audio return
    if (!audio) return

    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Update currentTime and duration
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const setAudioDuration = () => setDuration(audio.duration)

    // add event listeners
    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', setAudioDuration)

    // cleanup function
    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', setAudioDuration)
    }
  }, [])

  // Calculate progress percentage
  const progress = duration ? (currentTime / duration) * 100 : 0

  // Format time helper
  const formatTime = time => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60) // get whole minutes
    const seconds = Math.floor(time % 60) // get whole seconds
    return `${minutes}:${seconds.toString().padStart(2, 0)}`
  }


  // function to jump to a point in the progress bar
  const handleProgressBarClick = (e) => {
    
  }

  return (
    <div className='w-full p-4 mx-auto bg-white border-gray-200'>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        preload='metadata'
      />

      {/* Audio Controls */}
      <div className='flex items-center space-x-3'>
        {/* Play Button - Just visual for now */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className='flex items-center justify-center flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full'
        >
          {' '}
          {isPlaying ? (
            <Pause className='w-4 h-4 text-white fill-current ml-0.5' />
          ) : (
            <Play className='w-4 h-4 text-white fill-current ml-0.5' />
          )}
        </button>

        {/* Progress Section */}
        <div className='flex-1 pt-3'>
          {/* Progress bar */}
          <div
            className='relative w-full h-1 mb-1 bg-gray-400 rounded-full'
            onClick={handleProgressBarClick}
          >
            <div
              className={`h-full bg-black rounded-full top-0 left-0 absolute  `}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {/* Time Display */}
          <div className='flex items-center justify-between '>
            <span className='text-xs text-gray-500'>
              {formatTime(currentTime)}
            </span>
            <span className='text-xs text-gray-400'>
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className='flex items-center space-x-2'>
          <Volume2 className='w-4 h-4 text-gray-600' />
          <div className='flex items-center space-x-1'>
            <div
              className={`w-1 h-4 bg-gray-300 rounded-full${
                isPlaying ? ' volume-bar' : ''
              }`}
            ></div>
            <div
              className={`w-1 h-6 bg-gray-500 rounded-full${
                isPlaying ? ' volume-bar' : ''
              }`}
            ></div>
            <div
              className={`w-1 h-4 bg-gray-300 rounded-full${
                isPlaying ? ' volume-bar' : ''
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
