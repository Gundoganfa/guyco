'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-amber-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <Image
            src="/logo/Goylogo.png"
            alt="GOY COIN Logo"
            width={200}
            height={200}
            className="mx-auto animate-float drop-shadow-2xl"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          <span className="text-gradient">GOY COIN</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-amber-300 mb-4"
        >
          The Lost Chapter of Dogecoin
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Everyone remembers Dogecoin... But here's the part most people don't know. 
          <br />
          <span className="text-amber-400 font-semibold">🐶 Meet GOY - The forgotten brother, finally unleashed!</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
        >
          <a 
            href="#community"
            className="bg-gradient-goy text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-amber-400/50 w-full sm:w-auto inline-block text-center"
          >
            🚀 Join the Movement
          </a>
          <a 
            href="#story"
            className="border-2 border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-full text-lg hover:bg-amber-400 hover:text-black transform transition-all duration-300 w-full sm:w-auto inline-block text-center"
          >
            📖 Read the Story
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <p className="text-amber-300 font-semibold mb-4 text-xl">
            "We had Doge, now we GOY!"
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-amber-400 mx-auto cursor-pointer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

