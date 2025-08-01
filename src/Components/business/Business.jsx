import { businessNewsData } from '../../data.js'

const Business = () => {
  // const currentYear = new Date().getFullYear();

  // function to dynamically get category image
  // function getCategoryImage(category) {
  //   const menuItem = menuData.find(
  //     (menu) => menu.category.toLowerCase() === category.toLowerCase()
  //   );
  //   return menuItem?.image || menuData[0].image;
  // }

  // Extract the first item from businessNewsData
  const firstBusinessNews = businessNewsData[0]

  return (
    <div className=' px-0'>
      <div className='relative flex w-full h-[650px] mb-0'>
        {/* Left section */}
        <div className='w-[55%] h-full  flex flex-col gap-2 mb-5 '>
          <div className='w-full mx-auto px-2'>
            <h1 className='section-heading pt-4 px-3'>Business</h1>
            <img
              className='rounded-[0.4rem] h-[50%] w-[95%] mx-auto'
              src={firstBusinessNews.image}
              alt='business image'
            />
            <div className='flex flex-col items-left justify-between gap-2 align-center w-[95%] px-4'>
              <div className='flex items-center gap-2 mt-4 h-full'>
                <div className='object-cover w-12 h-10'>
                  <img
                    alt={firstBusinessNews.author}
                    className='w-full h-full border-2 border-white rounded-full hover:z-10 focus:z-10 object-cove'
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                  />
                </div>
                <div className='flex  items-center  justify-between w-full mt-2'>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm'>{firstBusinessNews.author}</p>
                    <span className='inline-block w-1 h-1 bg-gray-400 rounded-full'></span>
                    <p className='text-sm text-gray-800 '>
                      {firstBusinessNews.category}
                    </p>
                  </div>
                  <div className='flex items-center mt-4'>
                    <p className='items-center text-xs text-gray-400'>
                      {firstBusinessNews.dateAdded}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className='mt-5 text-lg font-bold text-black'>
                {firstBusinessNews.title}
              </h3>
              <p className='pt-2 text-sm text-gray-400 line-clamp-2'>
                {firstBusinessNews.snippet}
              </p>
            </div>
          </div>
        </div>

        {/* */}

        <div className=' bg-[#686868] w-[0.6px] h-full'></div>

        {/*** right section */}
        <div className=' w-[45%] max-h-[600px] h-full mt-5 pb-6 pt-12 '>
          {businessNewsData.slice(1).map(newsItem => (
            <div
              key={newsItem.id}
              className='flex flex-col w-full pb-4 mb-4 border-b border-b-[#686868] h-1/3 last:border-b-0  '
            >
              <div className='px-3'>
                <div className='flex flex-row items-center gap-4 '>
                  <img
                    className='w-1/3 h-24 rounded-[0.6rem] object-cover'
                    src={newsItem.image}
                    alt='business image'
                  />
                  <h3 className='w-2/3 mt-5 text-lg font-bold text-black '>
                    {newsItem.title}
                  </h3>
                </div>
                <div className='flex items-center justify-between gap-2 align-center '>
                  <div className='flex items-center gap-2 mt-4 '>
                    <div className='object-cover w-10 h-10'>
                      <img
                        alt={firstBusinessNews.author}
                        className='w-full h-full border-2 border-white rounded-full hover:z-10 focus:z-10 object-cove'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                      />
                    </div>
                    <p className='text-sm'>{newsItem.author}</p>
                    <span className='inline-block w-1 h-1 rounded-full bg-stone-950'></span>
                    <p className='text-sm text-gray-800 '>
                      {newsItem.category}
                    </p>
                  </div>
                  <div className='flex items-center mt-4'>
                    <p className='items-center text-xs text-gray-400'>
                      {newsItem.dateAdded}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Business
