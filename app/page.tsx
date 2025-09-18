'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import FeaturesSection from '@/components/FeaturesSection'
import MovementSection from '@/components/MovementSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add event listener for smooth scrolling
    document.addEventListener('click', handleClick)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <main className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Story Section */}
      <section id="story">
        <StorySection />
      </section>

      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* Movement Section */}
      <section id="movement">
        <MovementSection />
      </section>

      {/* CTA Section */}
      <section id="community">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="#community"
          className="bg-gradient-goy text-black font-bold py-3 px-6 rounded-full shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105 animate-bounce-slow inline-block"
        >
          🚀 Buy GOY
        </a>
      </div>
    </main>
  )
}

