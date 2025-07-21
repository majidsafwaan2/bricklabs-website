'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center">
              <div className="w-6 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">BrickLabs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-red transition-colors">
              Home
            </Link>
            <Link href="/library" className="text-gray-700 hover:text-primary-red transition-colors">
              Library
            </Link>
            <Link href="/competition" className="text-gray-700 hover:text-primary-red transition-colors">
              Competition
            </Link>
            <Link href="/forum" className="text-gray-700 hover:text-primary-red transition-colors">
              Forum
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-red transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/library" 
                className="text-gray-700 hover:text-primary-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Library
              </Link>
              <Link 
                href="/competition" 
                className="text-gray-700 hover:text-primary-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Competition
              </Link>
              <Link 
                href="/forum" 
                className="text-gray-700 hover:text-primary-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Forum
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 