import Header from "./Components/header/Header";
import HeaderHoriztonal from "./Components/headerHorizontal/HeaderHoriztonal";
import Footer from "./Components/footer/Footer";

import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Audio from "./Pages/Audio";
import Opinion from "./Pages/Opinion";
import Markets from "./Pages/Markets";
import Lifestyle from "./Pages/Lifestyle";
import Health from "./Pages/Health";
import Games from "./Pages/Games";
import Technology from "./Pages/Technology";
import TopStories from "./Pages/TopStories";
import World from "./Pages/World";

import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className='w-full min-h-screen bg-[#ffffff]'>
      <div className='flex flex-col items-center w-full'>
        {!isLoginPage && (
          <>
            {/* Full width for top header */}
            <div className='w-full'>
              <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
                <Header />
              </div>
            </div>

            {/* Full width navigation bar */}
            <div className='w-full '>
              <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10'>
                <HeaderHoriztonal />
              </div>
            </div>
          </>
        )}

        {/* Routes */}
        <main className='flex-1 w-full'>
          <Analytics />
          <div
            className={
              !isLoginPage
                ? `max-w-[1440px] mx-auto px-4 sm:px-[3vw] lg:px-[4vw]`
                : ""
            }
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/trending' element={<Trending />} />
              <Route path='/audio' element={<Audio />} />
              <Route path='/opinion' element={<Opinion />} />
              <Route path='/markets' element={<Markets />} />
              <Route path='/lifestyle' element={<Lifestyle />} />
              <Route path='/health' element={<Health />} />
              <Route path='/games' element={<Games />} />
              <Route path='/technology' element={<Technology />} />
              <Route path='/topstories' element={<TopStories />} />
              <Route path='/world' element={<World />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
        </main>

        {!isLoginPage && (
          <footer className='w-full bg-[#eeeeee]'>
            <div className='max-w-[1440px] mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
              <Footer />
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;
