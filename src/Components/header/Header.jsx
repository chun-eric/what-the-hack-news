import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full mt-10'>
      <div className='flex items-center justify-center w-full px-1 sm:px-3 lg:px-24 min-h-30'>
        <div className='py-0  flex w-[25%]  lg:w-[35%] xl:w-[30%] items-center justify-start px-3 sm:px-8 md:px-12 lg:pl-0 '>
          <div className='relative lg:flex items-center justify-start max-w-[600px] w-full hidden '>
            <input
              id='search'
              className='w-full pl-6 pr-12 h-12 border rounded-full focus:outline-none focus:ring-1 focus:ring-[royalBlack]'
              type='text'
              placeholder='Search...'
              value={''}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='absolute w-6 h-6 text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2'
            >
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#333'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#000'
            className='flex items-center justify-start size-7 lg:hidden'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
          </svg>
        </div>

        <div className='flex items-center justify-center flex-1 w-full'>
          <Link to='/'>
            <h1 className='font-["Bebas_Neue"] md:text-4xl text-gray-900 tracking-wider cursor-pointer flex items-center mt-2 text-[1.4rem] sm:text-3xl'>
              What_The_Hack
            </h1>
          </Link>
        </div>

        <div className=' w-[30%] flex items-center justify-end gap-3 text-gray-900 cursor-pointer'>
          <Link to='/login'>
            <button className='hidden p-3 px-4 text-base font-bold text-gray-900 rounded-lg lg:inline-flex border border-black hover:bg-black transition-colors hover:text-white'>
              Sign In
            </button>
          </Link>
          <Link to='/login'>
            <button className='hidden p-3 px-4 text-base font-bold text-white bg-blue-500 rounded-lg lg:inline-flex'>
              Register
            </button>
          </Link>
          <Link to='/login'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='px-2 cursor-pointer size-12 lg:hidden'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </Link>
          {/* 
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='cursor-pointer size-8 lg:hidden'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 9h16.5m-16.5 6.75h16.5'
            />
          </svg> */}
        </div>
      </div>
    </div>
  )
}

export default Header
