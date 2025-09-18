'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, ExternalLink } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Story', href: '#story' },
    { name: 'Why GOY', href: '#features' },
    { name: 'Movement', href: '#movement' },
    { name: 'Community', href: '#community' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-amber-400/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/logo/Goylogo.png"
              alt="GOY COIN"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-black text-gradient">
              GOY COIN
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-amber-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href="#community"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-goy text-black font-bold py-2 px-6 rounded-full hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Buy GOY</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block text-gray-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#community"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="bg-gradient-goy text-black font-bold py-3 px-6 rounded-full w-full flex items-center justify-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <span>Buy GOY</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

