'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Shield, Coins, Users, ExternalLink } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const quickStats = [
    { icon: <Shield className="w-6 h-6" />, label: "Safe & Secure", value: "Audited" },
    { icon: <Users className="w-6 h-6" />, label: "Community", value: "Growing" },
    { icon: <Coins className="w-6 h-6" />, label: "Supply", value: "Limited" },
    { icon: <Rocket className="w-6 h-6" />, label: "Launch", value: "Ready" }
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to <span className="text-gradient">GOY</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Don't miss your chance to be part of the next big meme coin revolution. 
            GOY isn't just a token - it's a piece of crypto history.
          </p>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-goy text-black font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:shadow-amber-400/50 transform transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <Rocket className="w-5 h-5" />
              <span>Buy GOY Now</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-full text-lg hover:bg-amber-400 hover:text-black transform transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/50 p-4 rounded-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-2 text-amber-400">
                  {stat.icon}
                  <div className="text-center">
                    <p className="font-bold text-sm">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-3xl p-8 backdrop-blur-sm border border-amber-400/30 mb-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-400 mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6">Get exclusive updates, memes, and early access to GOY news</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-slate-800 border border-gray-600 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-goy text-black font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-slate-800 p-8 rounded-2xl border border-amber-400/20">
            <div className="text-6xl mb-4">🐕</div>
            <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              "We had Doge, now we GOY!"
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              GOY COIN isn't just another meme coin. It's the untold story of Dogecoin's forgotten brother — finally unleashed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

