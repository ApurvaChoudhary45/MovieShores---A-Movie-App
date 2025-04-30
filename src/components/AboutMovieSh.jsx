import React from 'react'

import { animate, delay, motion } from 'framer-motion'

const AboutMovieSh = () => {
    const container = (delay)=>({
        initial : {opacity: 0, x: -100},
        animate : {
            x:0, 
            opacity: 1,
            transition: {duration: 1, delay : delay}
        }
    })

    const separator = (delay)=>({
        initial : {opacity: 0, y: 100},
        animate : {
            y:0, 
            opacity: 1,
            transition: {duration: 1, delay : delay}
        }
    })
    return (
        <div className='text-center flex flex-col items-center py-41 gap-3  '>
            <motion.h1 className='text-white text-[50px] max-w-1/2' variants={container(0.5)} initial="initial" animate="animate">Find Your Next Movie Adventure From Classics to New Releases</motion.h1>
            <motion.span className='text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text tracking-tight text-transparent' variants={container(1)} initial="initial" animate="animate">We've Got You Covered!</motion.span>
            <motion.svg
                viewBox="0 0 1440 100"
                className="w-full h-[100px] mt-8"
                preserveAspectRatio="none"
                variants={separator(1)} initial="initial" animate="animate"

            >
                <defs>
                    <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FDE68A" />  {/* Yellow */}
                        <stop offset="100%" stopColor="#FACC15" /> {/* Pink */}
                    </linearGradient>
                </defs>
                <path
                    d="M0,100 C480,0 960,0 1440,100"
                    fill="none"
                    stroke="url(#strokeGradient)"
                    strokeWidth="5"
                />
            </motion.svg>


        </div>
    )
}

export default AboutMovieSh
