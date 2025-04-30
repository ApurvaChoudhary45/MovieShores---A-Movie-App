import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';

import { results } from '../Redux/query/searchQuery';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');


  const [Input, setInput] = useState('')
  const dispatch = useDispatch()

  const tabs = ['Home', 'Movies', 'Series', 'Kids'];

  const container = (delay)=>({
          initial : {opacity: 0, y: -100},
          animate : {
              y:0, 
              opacity: 0.7,
              transition: {duration: 1, delay : delay}
          }
      })

  const handleSearch = ()=>{
    dispatch(results(Input))
    setInput('')
  }

  return (
    <motion.nav className="flex items-center justify-between px-8 py-4 bg-black text-white opacity-75" variants={container(0.25)} initial="initial" animate="animate">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-400">MOVIESHORES</div>

      {/* Center Navigation Tabs */}
      <div className="relative flex bg-gray-900 rounded-full px-4 py-2 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 py-1 font-semibold rounded-full text-gray-400 hover:text-white cursor-pointer"
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black rounded-full z-0"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Search Button */}
      <div className="flex items-center space-x-4">
        <input type="text" placeholder='Search'  className='rounded-xl' value={Input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSearch} className="bg-yellow-400 p-2 rounded-full cursor-pointer">
          <Search className="text-black" size={20} />
        </button>
      </div>
    </motion.nav>
  );
}
