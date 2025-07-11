import menuData from '../../data'

const HeaderHoriztonal = () => {
  return (
    <div className='invisible lg:visible w-full border-b  min-h-[1.5rem] flex items-center justify-center '>
      <aside className=' flex justify-center p-6  text-[#0f1011] font-inter text-[0.85rem] '>
        <nav className='flex xl:gap-12 lg:gap-8 '>
          {menuData.map(menu => (
            <a key={menu.id} href='#' className='nav-link'>
              <div
                key={menu.id}
                className='flex flex-row items-center category gap-1 transition-all duration-200 ease-in-out hover:text-[#408dff] hover:underline '
              >
                <span>{menu.category}</span>
                {/* <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m19.5 8.25-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span> */}
              </div>
            </a>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default HeaderHoriztonal
