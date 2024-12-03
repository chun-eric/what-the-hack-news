import menuData from "../data.js";

const News = () => {
  console.log(menuData);
  return (
    <div className='news-app'>
      <div className='news-header'>
        <h1 className='logo'>News App</h1>
      </div>
      <div className='news-content'>
        <nav className='navbar'>
          <h1 className='nav-heading'>Categories</h1>
          <div className='categories'>
            {menuData.map((menu) => (
              <a key={menu.id} href='#' className='nav-link'>
                <span>{menu.category}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default News;
