import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { FaHeart } from 'react-icons/fa'
import { PlayCircleIcon } from 'lucide-react'
import { FaCheck } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux'
import { favIcon } from '../Redux/favorite/favorite'
import { WatchIcon } from 'lucide-react'
import { watchIcon } from '../Redux/Watch/watch'
import { TicketIcon } from 'lucide-react'
const MovieCard = () => {
  const searchQuery = useSelector(state => state.search.query)
  const dispatch = useDispatch()
  const Icon = useSelector(state=> state.fav.favs)
  const selectWatch = useSelector(state=>state.watched.watched)
  
    const [movieData, setmovieData] = useState([])
    useEffect(() => {
        const fetchmovie = async ()=>{
          const result = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&page=1&apikey=9421c1aa`)
          const total = await result.json()
          setmovieData(total)
        }
        fetchmovie()
      }, [searchQuery])
  return (
    <>
    <div className='text-center'>
    <motion.div className='block mx-auto text-5xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-900
 bg-clip-text tracking-tight text-transparent' whileInView={{opacity:1, y:-40}} initial={{opacity:0, y:100}} transition={{duration:0.5}}>Movies</motion.div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
    {movieData?.Search?.map(item=>{
      const isFav = Icon.includes(item.imdbID)
      const isWatch = selectWatch.includes(item.imdbID)
          return <motion.div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black
          rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer mx-10 p-5" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 0.5}} key={item.imdbID}>
               <img className="w-full h-60 object-cover rounded-2xl" src={item.Poster} alt="Guardians of the Galaxy"/>
               <div className="p-4">
                 <h2 className="text-yellow-400 text-l  g font-semibold mb-2 ">{item.Title}</h2>
                 <p className="text-gray-400 text-sm font-bold">Year: {item.Year}</p>
                 <p className="text-gray-400 text-sm font-bold">Type: {item.Type}</p>
                 <div className='bg-transparent flex justify-between mt-2'>
                  {isWatch ? (<FaCheck onClick={()=>dispatch(watchIcon(item.imdbID))} className='text-green-500 cursor-pointer'/>): (<button className='text-yellow-300 bg-gray-700 px-2 rounded-2xl' onClick={()=>dispatch(watchIcon(item.imdbID))}>Watch</button>)}
                  
                 <FaHeart style={{color: isFav ? 'red' : 'white'}} onClick={()=>{dispatch(favIcon(item.imdbID))
                 }}/>
                 
                  

                 </div>
                 
               </div>
             </motion.div>
        })}
    
    </div>
    </>

  )
}

export default MovieCard
