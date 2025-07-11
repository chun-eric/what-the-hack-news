import Header from './Components/header/Header'
import HeaderHoriztonal from './Components/headerHorizontal/HeaderHoriztonal'
import Footer from './Components/footer/Footer'

import Home from './Pages/Home'
import AudioPage from './Pages/AudioPage'
import OpinionPage from './Pages/OpinionPage'
import MarketsPage from './Pages/MarketsPage'
import LifeStylePage from './Pages/LifeStylePage'
import HealthPage from './Pages/HealthPage'
import GamesPage from './Pages/GamesPage'
import TechnologyPage from './Pages/TechnologyPage'

import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import TopStoriesPage from './Pages/TopStoriesPage'
// import TrendingPage from './Pages/TrendingPage'
import WorldPage from './Pages/WorldPage'
import LatestPage from './Pages/LatestPage'

const App = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

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
              <div className='max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10'>
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
                : ''
            }
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/latest' element={<LatestPage />} />
              <Route path='/audio' element={<AudioPage />} />
              <Route path='/opinion' element={<OpinionPage />} />
              <Route path='/markets' element={<MarketsPage />} />
              <Route path='/lifestyle' element={<LifeStylePage />} />
              <Route path='/health' element={<HealthPage />} />
              {/* <Route path='/games' element={<GamesPage />} /> */}
              <Route path='/technology' element={<TechnologyPage />} />
              <Route path='/topstories' element={<TopStoriesPage />} />
              <Route path='/world' element={<WorldPage />} />
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
  )
}

export default App
