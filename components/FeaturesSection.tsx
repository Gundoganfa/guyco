'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Zap, Users, Star } from 'lucide-react'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Real Origin Story",
      description: "The first coin inspired by one of Billy Markus's actual pets",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Meme Power",
      description: "\"If Doge runs, Goy barks.\" - Unleashing viral potential",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Spirit",
      description: "Reviving the Doge energy for a new generation",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Authentic Legacy",
      description: "Connected to the original meme coin revolution",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-indigo-500/10",
      borderColor: "border-purple-500/20"
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Why <span className="text-gradient">GOY COIN</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More than just another meme coin - it's a piece of crypto history waiting to be discovered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${feature.bgColor} p-6 rounded-2xl border ${feature.borderColor} h-full hover:scale-105 transform transition-all duration-300 hover:shadow-2xl`}>
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl w-fit mb-4 group-hover:animate-bounce`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-3xl p-8 backdrop-blur-sm border border-amber-400/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-3xl md:text-4xl font-black text-amber-400 mb-2"
                >
                  100%
                </motion.div>
                <p className="text-gray-300 font-semibold">Authentic</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-3xl md:text-4xl font-black text-blue-400 mb-2"
                >
                  🐕
                </motion.div>
                <p className="text-gray-300 font-semibold">One of a Kind</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-3xl md:text-4xl font-black text-green-400 mb-2"
                >
                  ∞
                </motion.div>
                <p className="text-gray-300 font-semibold">Potential</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-3xl md:text-4xl font-black text-purple-400 mb-2"
                >
                  🚀
                </motion.div>
                <p className="text-gray-300 font-semibold">To the Moon</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-400/20">
            <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
              "If Doge runs, Goy barks."
            </p>
            <p className="text-gray-300 text-lg">
              The meme power that started a revolution is about to bark again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

