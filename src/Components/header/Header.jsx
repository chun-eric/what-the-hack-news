const Header = () => {
  return (
    <div className='w-full mt-10'>
      <div className='flex items-center justify-between w-full px-24 min-h-30'>
        <div className='py-0 px-[1rem] flex w-[20%] items-center justify-center'>
          <div className='relative flex items-center justify-center max-w-[600px] w-full'>
            <input
              id='search'
              className='w-full pl-6 pr-12 h-12 border rounded-full focus:outline-none focus:ring-1 focus:ring-[royalBlack]'
              type='text'
              placeholder='Search...'
              value={""}
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
        </div>

        <div className='flex items-center justify-center flex-1 w-full'>
          <h1 className='font-["Bebas_Neue"] text-4xl text-gray-900 tracking-wider'>
            What_The_Hack
          </h1>
        </div>

        <div className=' w-[20%] flex items-center justify-center gap-5 text-gray-900'>
          <button className='text-base font-bold text-gray-900 rounded-lg'>
            Sign In
          </button>
          <button className='p-3 px-4 text-base font-bold text-white bg-blue-500 rounded-lg'>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
