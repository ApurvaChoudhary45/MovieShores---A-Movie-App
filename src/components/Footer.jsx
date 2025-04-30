import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <motion.h3 className="text-2xl font-bold text-yellow-400" whileInView={{opacity:1, y:0}} initial={{opacity: 0, y: 100}} transition={{duration: 0.5}}>About MOVIESHORES</motion.h3>
            <motion.p className="text-gray-400 text-sm" whileInView={{opacity:1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
              MOVIESHORES is your go-to place for discovering the latest movies and TV shows.
              With our easy-to-use interface, you can explore new films and series and find
              your favorites quickly.
            </motion.p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <motion.h3 className="text-2xl font-bold text-yellow-400" whileInView={{opacity:1, y:0}} initial={{opacity: 0, y: 100}} transition={{duration: 0.5}}>Follow Us</motion.h3>
            <motion.div className="flex space-x-4" whileInView={{opacity:1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}}>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <motion.h3 className="text-2xl font-bold text-yellow-400" whileInView={{opacity:1, y:0}} initial={{opacity: 0, y: 100}} transition={{duration: 0.5}}>Contact Us</motion.h3>
            <motion.p className="text-gray-400 text-sm" whileInView={{opacity:1, x:0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}>Email: support@movieshores.com</motion.p>
            <motion.p className="text-gray-400 text-sm" whileInView={{opacity:1, x:0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}>Phone: +1 234 567 890</motion.p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <motion.p whileInView={{opacity:1, y:0}} initial={{opacity: 0, y: 100}} transition={{duration: 1}}>&copy; 2025 MOVIESHORES. All rights reserved.</motion.p>
      </div>
    </footer>
  )
}
