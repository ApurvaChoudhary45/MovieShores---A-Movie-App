import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { results } from '../Redux/query/searchQuery';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [input, setInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const tabs = ['Home', 'Movies', 'Series', 'Kids'];

  const container = (delay) => ({
    initial: { opacity: 0, y: -100 },
    animate: {
      y: 0,
      opacity: 0.7,
      transition: { duration: 1, delay: delay },
    },
  });

  const handleSearch = () => {
    dispatch(results(input));
    setInput('');
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="bg-black text-white px-6 py-4 opacity-75"
      variants={container(0.25)}
      initial="initial"
      animate="animate"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">MOVIESHORES</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Tabs + Search (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-70">
          <div className="flex bg-gray-900 rounded-full px-4 py-2 space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-4 py-1 font-semibold rounded-full text-gray-400 hover:text-white"
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
          <div className="flex justify-end items-center">
            <input
              type="text"
              placeholder="Search"
              className="rounded-xl px-2 py-1 text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 p-2 rounded-full"
            >
              <Search className="text-black" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <div className="flex flex-col space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="rounded-xl px-2 py-1 flex-1 text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 p-2 rounded-full"
            >
              <Search className="text-black" size={20} />
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
