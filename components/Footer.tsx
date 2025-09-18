'use client'

import { motion } from 'framer-motion'
import { Twitter, MessageCircle, Instagram, Github, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <MessageCircle className="w-5 h-5" />, name: "Telegram", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
    { icon: <Github className="w-5 h-5" />, name: "GitHub", href: "#" },
    { icon: <Mail className="w-5 h-5" />, name: "Email", href: "mailto:info@goycoin.com" }
  ]

  const quickLinks = [
    { name: "Whitepaper", href: "#" },
    { name: "Tokenomics", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "Community", href: "#" },
    { name: "FAQ", href: "#" }
  ]

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Risk Disclaimer", href: "#" },
    { name: "Legal", href: "#" }
  ]

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-black mb-4">
                <span className="text-gradient">GOY COIN</span>
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                The lost chapter of Dogecoin. The untold story of Billy Markus's forgotten companion, 
                finally unleashed to spark the second wave of meme coin revolution.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-slate-800 p-3 rounded-full hover:bg-gradient-goy hover:text-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 text-amber-400">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-slate-900 p-6 rounded-xl mb-8"
        >
          <h4 className="text-lg font-bold text-amber-400 mb-3">⚠️ Important Disclaimer</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cryptocurrency investments carry significant risk and may lose value. GOY COIN is a meme token created for entertainment purposes. 
            This website and its content should not be considered as financial advice. Always do your own research and invest only what you can afford to lose. 
            Past performance does not guarantee future results.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 GOY COIN. Made with 
            </p>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <p className="text-gray-400 text-sm">
              by the community.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Contract Address:</span>
            <code className="bg-slate-800 px-3 py-1 rounded text-amber-400 font-mono text-xs">
              Coming Soon...
            </code>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-amber-400 hover:text-amber-300 underline"
            >
              Copy
            </motion.button>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 text-xs">
            🐕 "If you're reading this, you're early. Welcome to the pack!" 🐾
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

