import menuData, { dummyNewsData, businessNewsData } from "../data.js";
import { Avatar } from "@material-tailwind/react";
import Trending from "../Components/trending/Trending.jsx";
import Header from "../Components/header/Header.jsx";

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
  const firstBusinessNews = businessNewsData[0];

  return (
    <div className='news-app'>
      {/* Header */}
      <Header />
      <div className='news-content'>
        <nav className='navbar'>
          <h1 className='nav-heading'>Categories</h1>
          <div className='categories'>
            {menuData.map((menu) => (
              <a key={menu.id} href='#' className='nav-link'>
                <div key={menu.id} className='category'>
                  <span className='icon'>
                    {/* render as an menu icon component when wrapped in < /> */}
                    <menu.icon className='w-5 h-5' />
                  </span>
                  <span>{menu.category}</span>
                </div>
              </a>
            ))}
          </div>
        </nav>
        <div className='news-section'>
          {/* Headline */}
          <h1 className='section-heading'>Breaking News</h1>
          <div className='headline'>
            <img src={getCategoryImage("Nation")} alt='Headline Image' />
            <h2 className='headline-title'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              ullam.
            </h2>
          </div>
          {/* news grid including 6 news items*/}
          <div className='spacer'></div>
          <h1 className='section-heading'>Top Stories</h1>
          <div className='news-grid'>
            {dummyNewsData.map((newsItem) => (
              <div key={newsItem.id} className='news-grid-item'>
                <img
                  className=''
                  src={getCategoryImage(newsItem.category)}
                  alt='News image'
                />
                <h3 className=''>{newsItem.title}</h3>
              </div>
            ))}
          </div>

          {/* business section */}
          <div className='spacer'></div>
          <h1 className='section-heading'>Business</h1>
          <div className='flex w-full  gap-4 h-[500px] mb-6'>
            <div className='w-[48%] h-[500px] flex flex-col gap-2 mb-5'>
              <img
                className='rounded-[0.6rem] h-[50%]'
                src={firstBusinessNews.image}
                alt='business image'
              />
              <div className='flex items-center justify-between gap-2 align-center '>
                <div className='flex items-center gap-2 mt-4'>
                  <Avatar
                    variant='circular'
                    style={{ width: "40px", height: "40px" }}
                    alt={firstBusinessNews.author}
                    className='border-2 border-white rounded-full hover:z-10 focus:z-10'
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                  />
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
              <h3 className='mt-5 text-lg font-bold text-black'>
                {firstBusinessNews.title}
              </h3>
              <p className='pt-2 text-sm text-gray-400 line-clamp-2'>
                {firstBusinessNews.snippet}
              </p>
            </div>
            {/*** right section */}
            <div className='space-x-2 w-[50%] h-[500px]  '>
              {businessNewsData.slice(1).map((newsItem) => (
                <div
                  key={newsItem.id}
                  className='flex flex-col w-full pb-4 mb-4 border-b h-1/3 last:border-b-0 '
                >
                  <div className='flex flex-row items-center gap-4'>
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
                      <Avatar
                        variant='circular'
                        style={{ width: "40px", height: "40px" }}
                        alt={newsItem.author}
                        className='border-2 border-white rounded-full hover:z-10 focus:z-10'
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                      />
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
              ))}
            </div>
          </div>
        </div>

        {/* Trending section */}
        <Trending />

        {/* Footer */}
        <footer className='w-full h-full p-8 max-h-28 bg-[#eeeeee] flex items-center justify-center z-[4] flex-col font-["Bebas_Neue"] absolute bottom-0 left-0 rounded-b-[0.6rem]'>
          <p className='text-xl font-["Bebas_Neue"] '>What_The_Hack</p>
          <p className='text-xl font-["Bebas_Neue"]'>
            &copy; {currentYear} All Rights Reserved. Created by Eric Chun
          </p>
        </footer>
      </div>
    </div>
  );
};

export default News;
