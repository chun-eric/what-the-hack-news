import menuData, { dummyNewsData, businessNewsData } from "../data.js";
import { Avatar } from "@material-tailwind/react";

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
      <div className='news-header'>
        <h1 className='logo'>What_The_Hack</h1>

        <div className='py-0 px-[1rem] flex w-3/4 '>
          <div className='relative w-full flex justify-center'>
            <input
              id='search'
              className=' w-3/4  pl-6 pr-12 h-14 border rounded-full focus:outline-none focus:ring-1 focus:ring-[royalBlack] '
              type='text'
              placeholder='Search...'
              value={""}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-7 h-7 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
            >
              <path
                fillRule='evenodd'
                d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>

        <div className='news-header-right'>
          <button className='sign-in'>Sign In</button>
          <button className='subscribe'>Subscribe</button>
        </div>
      </div>

      <div className='news-content'>
        <nav className='navbar'>
          <h1 className='nav-heading'>Categories</h1>
          <div className='categories'>
            {menuData.map((menu) => (
              <a key={menu.id} href='#' className='nav-link'>
                <div key={menu.id} className='category'>
                  <span className='icon'>
                    {/* render as an menu icon component when wrapped in < /> */}
                    <menu.icon className='h-5 w-5' />
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
          <div className='business-section'>
            <div className='business-left-section'>
              <img
                className='business-left-image'
                src={firstBusinessNews.image}
                alt='business image'
              />
              <div className='flex gap-2 align-center justify-between items-center '>
                <div className='flex gap-2 mt-4 items-center'>
                  <Avatar
                    variant='circular'
                    style={{ width: "40px", height: "40px" }}
                    alt={firstBusinessNews.author}
                    className='border-2 rounded-full border-white hover:z-10 focus:z-10'
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                  />
                  <p className='text-sm'>{firstBusinessNews.author}</p>
                  <span className='h-1 w-1 bg-gray-400 rounded-full inline-block'></span>
                  <p className='text-sm text-gray-800 '>
                    {firstBusinessNews.category}
                  </p>
                </div>
                <div className='flex items-center mt-4'>
                  <p className='text-xs text-gray-400 items-center'>
                    {firstBusinessNews.dateAdded}
                  </p>
                </div>
              </div>
              <h3 className='mt-5 font-bold text-black text-lg'>
                {firstBusinessNews.title}
              </h3>
              <p className='line-clamp-2 text-sm text-gray-400 pt-2'>
                {firstBusinessNews.snippet}
              </p>
            </div>
            <div className='business-right-section'>
              <div className=''>
                <div className=''>
                  <img src='' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending section */}
        <div className='trending-section'>
          <div className=''>
            <h1 className='trending-heading'>Latest </h1>
          </div>
        </div>

        <footer>
          <p className='copyright'>What_The_Hack</p>
          <p className=''>
            &copy; {currentYear} All Rights Reserved. Created by Eric Chun
          </p>
        </footer>
      </div>
    </div>
  );
};

export default News;
