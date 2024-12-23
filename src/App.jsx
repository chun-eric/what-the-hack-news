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
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Analytics />
      {/* Header */}
      <div className='w-full'>
        <Header />
        <HeaderHoriztonal />
      </div>

      {/* Routes */}
      <div className='w-full'>
        <div className='px-4 sm:px-[3vw] md:px-[4vw] lg:px-[5vw]'>
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
          </Routes>
        </div>
      </div>

      <div className='w-full'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
