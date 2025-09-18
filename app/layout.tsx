import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GOY COIN - The Lost Chapter of Dogecoin',
  description: 'The untold story of Dogecoin\'s forgotten brother - finally unleashed. GOY COIN isn\'t just another meme coin.',
  keywords: 'GOY COIN, meme coin, cryptocurrency, Dogecoin, Billy Markus, crypto',
  openGraph: {
    title: 'GOY COIN - The Lost Chapter of Dogecoin',
    description: 'The untold story of Dogecoin\'s forgotten brother - finally unleashed.',
    images: ['/logo/Goylogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GOY COIN - The Lost Chapter of Dogecoin',
    description: 'The untold story of Dogecoin\'s forgotten brother - finally unleashed.',
    images: ['/logo/Goylogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  )
}

