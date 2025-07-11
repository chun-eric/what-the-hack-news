import React from 'react'
import { Link } from 'react-router-dom'
import { opinionCards } from './opinionData'

const Opinion = () => {
  return (
    <div className='flex flex-col w-full  bg-[#F2F7FF] border border-t-[#686868] border-b-[#686868]'>
      <div className='flex flex-col gap-1 pb-6 px-4'>
        <h1 className='section-heading pt-4 px-4'>Opinion</h1>
        {/* Featured Article Row */}
        <Link className='flex flex-row gap-6 px-4 ' to='/opinion/featured'>
          <img
            src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
            alt=''
            className='rounded-sm h-[280px] object-cover'
          />
          {/* Headline and Subtext */}
          <div className='flex flex-col justify-start'>
            <h2 className='font-bold text-3xl leading-tight mb-2'>
              {' '}
              Japan's Biggest Problem Is The Hand That's Feeding It
            </h2>
            <p className='text-sm font-normal text-gray-750 mb-1 w-[80%]'>
              {' '}
              Why Japan's government bureaucracy is causing a potential crisis
              in the making.
            </p>
            <a href='' className='text-blue-700 text-md mt-1 tracking-tighter '>
              By Biggie Smalls, Columnist
            </a>
          </div>
        </Link>

        {/* Individual Opinion Cards (3x) */}
        <div className='flex flex-row gap-3 justify-between items-stretch px-4 mt-6 border-t w-full mx-auto mb-2 pt-4'>
          {opinionCards.map(card => (
            <Link
              key={card.id}
              to={card.link}
              className={`flex flex-row items-center w-1/3 px-2 ${
                card.id === 2 ? 'border-x border-gray-300' : ''
              }`}
            >
              <div className='flex gap-4 px-2'>
                <img
                  src={card.image}
                  alt={card.author}
                  className='rounded-full w-14 h-14 mb-2 object-cover'
                />
                <div className='flex flex-col gap-1 align-left w-full text-left leading-[1.2]'>
                  <h3 className='font-semibold text-md mb-1 text-left'>
                    {card.headline}
                  </h3>
                  <span className='text-blue-500 text-sm text-left tracking-tighter'>
                    By {card.author}, {card.authorRole}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Opinion
