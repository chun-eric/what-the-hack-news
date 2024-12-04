import menuData, { dummyNewsData } from "../data.js";

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

  return (
    <div className='news-app'>
      <div className='news-header'>
        <h1 className='logo'>
          What The Hack_<span className=''>News</span>
        </h1>
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
          <div className='headline'>
            <img src={getCategoryImage("Nation")} alt='Headline Image' />
            <h2 className='headline-title'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              ullam.
            </h2>
          </div>
          {/* news grid including 6 news items*/}
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
        </div>
      </div>
      <footer>
        <p className='copyright'>
          <span>What The Hack News</span>
        </p>
        <p className=''>
          &copy; {currentYear} All Rights Reserved. Created by Eric Chun
        </p>
      </footer>
    </div>
  );
};

export default News;
