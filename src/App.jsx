import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AboutMovieSh from './components/AboutMovieSh'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'

function App() {
  // const [searchQuery, setsearchQuery] = useState('avengers')

 

  return (
    <>
      <div className='selection:bg-cyan-400 selection:text-neutral-200'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <Navbar/>

        <AboutMovieSh />
        <MovieCard/>
        <Footer/>
      </div>
    </>
  )
}

export default App
