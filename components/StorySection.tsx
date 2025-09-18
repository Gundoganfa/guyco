'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Enter GOY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The untold story behind the phenomenon that started it all
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">🏠 At Home with Billy Markus</h3>
                <p className="text-gray-300 leading-relaxed">
                  At home, Billy didn't just have inspiration from Doge. He also lived with two cats and one dog. 
                  That dog's name? <span className="text-amber-400 font-bold">GOY</span>. 🐶
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">🌟 The Hidden Character</h3>
                <p className="text-gray-300 leading-relaxed">
                  Doge made the world laugh and brought millions together. But behind the spotlight, 
                  another character lived in the shadows — GOY, the dog almost no one outside Billy's circle had heard about.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20">
                <h3 className="text-2xl font-bold text-green-400 mb-4">🚀 The Second Wave</h3>
                <p className="text-gray-300 leading-relaxed">
                  Now, Billy's fans are bringing him forward: 
                  <br />
                  <span className="text-green-400 font-bold">
                    "Doge started the first wave, but Goy will spark the second."
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-400/20 to-orange-600/20 p-8 rounded-3xl backdrop-blur-sm border border-amber-400/30">
              <div className="text-center">
                <div className="text-6xl mb-6">🐕</div>
                <h3 className="text-3xl font-bold text-amber-400 mb-4">GOY</h3>
                <p className="text-xl text-gray-300 mb-6">
                  The forgotten companion who inspired a revolution
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></span>
                    <span className="text-amber-400 font-semibold">Real origin story</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                    <span className="text-blue-400 font-semibold">Authentic connection</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-green-400 font-semibold">Community driven</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-2xl"
            >
              🐾
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-xl"
            >
              ⭐
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

