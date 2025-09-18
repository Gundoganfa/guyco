'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to 14 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 14)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-4 right-4 z-50 bg-gradient-to-br from-amber-500/90 to-orange-600/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl border border-amber-400/30 min-w-[240px] md:min-w-[280px]"
    >
      {/* Header */}
      <div className="flex items-center space-x-2 mb-3">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Clock className="w-5 h-5 text-black" />
        </motion.div>
        <h3 className="text-black font-bold text-xs md:text-sm">
          🚀 LAUNCH COUNTDOWN
        </h3>
      </div>

      {/* Countdown Display */}
      <div className="grid grid-cols-2 gap-3">
        {/* Days */}
        <motion.div
          key={timeLeft.days}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black/20 rounded-lg p-2 md:p-3 text-center"
        >
          <div className="text-2xl md:text-3xl font-black text-black">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-xs md:text-sm font-medium text-black/80">DAYS</div>
        </motion.div>

        {/* Hours */}
        <motion.div
          key={timeLeft.hours}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black/20 rounded-lg p-2 md:p-3 text-center"
        >
          <div className="text-2xl md:text-3xl font-black text-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs md:text-sm font-medium text-black/80">HOURS</div>
        </motion.div>
      </div>

      {/* Time Detail */}
      <div className="text-center mt-2">
        <div className="text-black/70 text-xs font-medium">
          {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')} remaining
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center mt-3"
      >
        <div className="flex items-center justify-center space-x-1">
          <Zap className="w-3 h-3 text-black" />
          <span className="text-[10px] md:text-xs font-bold text-black">
            GOY GOING LIVE!
          </span>
          <Zap className="w-3 h-3 text-black" />
        </div>
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 0 0 rgba(245, 158, 11, 0.4)',
            '0 0 0 10px rgba(245, 158, 11, 0)',
            '0 0 0 0 rgba(245, 158, 11, 0)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-2xl -z-10"
      />
    </motion.div>
  )
}
