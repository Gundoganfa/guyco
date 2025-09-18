'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Twitter, Instagram, MessageCircle, Hash, TrendingUp, Image as ImageIcon } from 'lucide-react'

export default function MovementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const socialFeatures = [
    {
      icon: <Hash className="w-6 h-6" />,
      title: "#GoyIsReal",
      description: "Fans flood social media with Goy art and memes",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10"
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Doge × Goy Crossovers",
      description: "Viral fan creations showing them side by side",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Merch & NFTs",
      description: "From stickers to collectibles, fueling the hype",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-indigo-500/10"
    }
  ]

  const socialPlatforms = [
    { 
      name: "Twitter", 
      icon: <Twitter className="w-8 h-8" />, 
      handle: "@GoyCoin", 
      color: "hover:bg-blue-400",
      followers: "Join the pack!"
    },
    { 
      name: "Telegram", 
      icon: <MessageCircle className="w-8 h-8" />, 
      handle: "GoyCoinOfficial", 
      color: "hover:bg-blue-500",
      followers: "Community chat"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-8 h-8" />, 
      handle: "@goy.coin", 
      color: "hover:bg-pink-500",
      followers: "Memes & art"
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            The <span className="text-gradient">Movement</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of GOY believers spreading the word across the internet
          </p>
        </motion.div>

        {/* Social Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${feature.bgColor} p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}>
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl w-fit mb-4 group-hover:animate-pulse`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Connect with the Pack</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`bg-slate-800 p-6 rounded-xl border border-gray-700 ${platform.color} hover:text-white transition-all duration-300 cursor-pointer group hover:scale-105`}
              >
                <div className="flex items-center space-x-4">
                  <div className="group-hover:animate-bounce">
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{platform.name}</h4>
                    <p className="text-gray-400 group-hover:text-gray-200">{platform.handle}</p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-300">{platform.followers}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Viral Content Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-3xl p-8 backdrop-blur-sm border border-amber-400/30"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-400 mb-6">Join the Viral Wave</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-4xl mb-2">🎨</div>
                <p className="text-sm text-gray-300">Fan Art</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-4xl mb-2">💎</div>
                <p className="text-sm text-gray-300">NFTs</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-4xl mb-2">👕</div>
                <p className="text-sm text-gray-300">Merch</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-4xl mb-2">🎮</div>
                <p className="text-sm text-gray-300">Games</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-goy text-black font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-amber-400/50"
            >
              🚀 Create & Share
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

