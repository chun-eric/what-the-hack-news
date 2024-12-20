import menuData, { dummyNewsData, businessNewsData } from "../data.js";
import Trending from "../Components/trending/Trending.jsx";
import Header from "../Components/header/Header.jsx";
import Business from "../Components/business/Business.jsx";
import HeaderHoriztonal from "../Components/headerHorizontal/HeaderHoriztonal.jsx";

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
    <div className='flex flex-col w-full  bg-[#fcfcfc]  overflow-y-auto'>
      <div className='flex justify-center w-full bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          {/* Side News Categories  */}
          <div className='flex justify-center '>
            {/* Middle News Section */}
            <div className='flex flex-col w-full h-full gap-4 px-6 '>
              <div className='w-full news-section'>
                {/* Headline */}
                <h1 className='pb-1 mt-3 section-heading'>Breaking News</h1>
                <div className='w-full h-full headline '>
                  <img
                    className='object-cover w-full h-[400px] rounded-[0.6rem] '
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
              {/* Business section */}
              <Business />
            </div>

            {/* Right Trending section */}
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
