import menuData, { dummyNewsData } from '../data.js'
// import Trending from "../Components/trending/Trending.jsx";
// import Header from "../Components/header/Header.jsx";
import Business from '../Components/business/Business.jsx'
import Latest from '../Components/latest/Latest.jsx'
import AudioNews from '../Components/audioNews/AudioNews.jsx'
import Opinion from '../Components/opinion/Opinion.jsx'

const News = () => {
  // const currentYear = new Date().getFullYear();

  // function to dynamically get category image
  function getCategoryImage (category) {
    const menuItem = menuData.find(
      menu => menu.category.toLowerCase() === category.toLowerCase()
    )
    // console.log(menuItem);

    // if menuItem exists, return menuItem.image (optional chaining)
    // otherwise, return first image as default.
    return menuItem?.image || menuData[0].image
  }

  // Extract the first item from businessNewsData
  // const firstBusinessNews = businessNewsData[0];

  return (
    <div className='flex flex-col w-full  bg-[#ffffff]  '>
      <div className='flex justify-center w-full bg-[#ffffff]  '>
        <div className='container mx-auto max-w-7xl'>
          <div className='flex flex-col justify-center w-full lg:flex-row'>
            {/* Middle News Section */}
            <div className='flex flex-col h-full w-[75%] border-r-[#686868]  border-r border-b mx-auto border-l border-l-[#686868] '>
              {/* Date and Weather */}
              <div className='w-full news-section   pb-8 flex flex-col px-4'>
                {/* Breaking Headline News */}
                <div className=''>
                  <h1 className='pb-1 mt-3 section-heading'>Breaking News</h1>
                  <div className='w-full h-full headline '>
                    <img
                      className='object-cover w-full h-[400px]  '
                      src={getCategoryImage('Nation')}
                      alt='Headline Image'
                    />
                    <h2 className='headline-title'>
                      The Second Day of Intensive Attacks Crushes Ukraine
                      Capital
                    </h2>
                  </div>
                  {/* news grid including 6 news items*/}
                  <div className='spacer'></div>
                  <h1 className='mt-10 section-heading'>Top Stories</h1>
                  <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
                    {dummyNewsData.map(newsItem => (
                      <div
                        key={newsItem.id}
                        className='relative w-full h-full rounded-lg cursor-pointer news-grid-item min-h-60'
                      >
                        <img
                          className='relative object-cover w-full h-full rounded-lg '
                          src={getCategoryImage(newsItem.category)}
                          alt='News image'
                        />
                        <div className='absolute inset-0 duration-300 rounded-lg bg-black/80 hover:bg-black/50'>
                          <h3 className='absolute bottom-0 left-0 w-full max-h-[6rem] font-inter p-4 z-[3] text-white'>
                            {newsItem.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='w-full border-t  border-t-[#686868]'></div>
              {/* Business section */}
              <Business />
              <Opinion />
            </div>

            {/* Right Trending section */}
            <div className='w-[25%]  border-r border-[#686868]'>
              <Latest />
              <AudioNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
