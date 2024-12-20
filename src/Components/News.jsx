import menuData, { dummyNewsData, businessNewsData } from "../data.js";
import Trending from "../Components/trending/Trending.jsx";
import Header from "../Components/header/Header.jsx";
import Business from "../Components/business/Business.jsx";

const News = () => {
  const currentYear = new Date().getFullYear();

  // function to dynamically get category image
  function getCategoryImage(category) {
    const menuItem = menuData.find(
      (menu) => menu.category.toLowerCase() === category.toLowerCase()
    );
    // console.log(menuItem);

    // if menuItem exists, return menuItem.image (optional chaining)
    // otherwise, return first image as default.
    return menuItem?.image || menuData[0].image;
  }

  // Extract the first item from businessNewsData
  // const firstBusinessNews = businessNewsData[0];

  return (
    <div className='flex flex-col news-app w-full h-full bg-[#fcfcfc] items-center justify-between relative shadow-[0_2rem_3rem_rgba(0,0,0,0.5)] gap-y-4'>
      {/* Header */}
      <Header />
      <div className='flex justify-center w-full bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          {/* Side News Categories  */}
          <div className='flex justify-center '>
            <aside className=' min-h-screen p-6 border-r w-[15%] text-[#0f1011] font-inter text-[0.95rem] '>
              <h1 className='pb-6 text-xl nav-heading'>Categories</h1>
              <nav className='flex flex-col  gap-y-[1.5rem]'>
                {menuData.map((menu) => (
                  <a key={menu.id} href='#' className='nav-link'>
                    <div
                      key={menu.id}
                      className='flex flex-row items-center category gap-[1rem] transition-all duration-200 ease-in-out hover:text-[#408dff] hover:border-r-2 hover:border-r-[#408dff]'
                    >
                      <span className='icon'>
                        {/* render as an menu icon component when wrapped in < /> */}
                        <menu.icon className='w-5 h-5' />
                      </span>
                      <span>{menu.category}</span>
                    </div>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Middle News Section */}
            <div className='flex flex-col w-full h-full gap-4 px-6 '>
              <div className='w-full news-section'>
                {/* Headline */}
                <h1 className='pb-1 mt-3 section-heading'>Breaking News</h1>
                <div className='w-full headline '>
                  <img
                    className='object-cover w-full h-full rounded-[0.6rem] '
                    src={getCategoryImage("Nation")}
                    alt='Headline Image'
                  />
                  <h2 className='headline-title'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eum, ullam.
                  </h2>
                </div>
                {/* news grid including 6 news items*/}
                <div className='spacer'></div>
                <h1 className='mt-6 section-heading'>Top Stories</h1>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
                  {dummyNewsData.map((newsItem) => (
                    <div
                      key={newsItem.id}
                      className='relative w-full h-full rounded-lg cursor-pointer news-grid-item min-h-60'
                    >
                      <img
                        className='relative object-cover w-full h-full rounded-lg after:absolute after:inset-0 after:w-full after:h-full after:bg-black/90'
                        src={getCategoryImage(newsItem.category)}
                        alt='News image'
                      />
                      <h3 className='absolute bottom-0 left-0 w-full max-h-[6rem] font-inter p-4 z-[3] text-white'>
                        {newsItem.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              {/* Business section */}
              {/* <Business /> */}
            </div>

            {/* Right Trending section */}
            <Trending />
            {/* Footer */}
          </div>

          <footer className='w-full h-full p-8 max-h-28 bg-[#eeeeee] flex items-center justify-center z-[4] flex-col font-["Bebas_Neue"] absolute bottom-0 left-0 rounded-b-[0.6rem]'>
            <p className='text-xl font-["Bebas_Neue"] '>What_The_Hack</p>
            <p className='text-xl font-["Bebas_Neue"]'>
              &copy; {currentYear} All Rights Reserved. Created by Eric Chun
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default News;
