import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrickLabs - Lego Technic Community',
  description: 'Build, learn, and compete with the BrickLabs community. Discover engineering principles through Lego Technic.',
  keywords: 'lego, technic, engineering, building, competition, community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
            <Link href="/contact" className="text-gray-700 hover:text-primary-red transition-colors">
              Contact
            </Link>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </body>
    </html>
  )
} 