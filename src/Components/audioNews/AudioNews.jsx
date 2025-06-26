import { useState, useEffect, useRef } from 'react'
import AudioPlayer from '../audioplayer/AudioPlayer'

const AudioNews = () => {
  return (
    <div className='max-w-md p-4 bg-white border-[#696969] border-b border-l border-r'>
      {/* audio controls and player */}
      <div className='my-4'>
        <h2 className='font-bold'>
          What The Hack News <br />
          Your Daily Audio News Brief
        </h2>
        <p className='text-sm'>
          Listen to the latest: {'dynamic data goes here'}
        </p>
      </div>

      {/* audio controls and player */}
      <div className='mb-2 border'>
        <AudioPlayer />
      </div>
      <div className='text-xs text-gray-500'>updated 1 hr ago</div>
    </div>
  )
}

export default AudioNews
