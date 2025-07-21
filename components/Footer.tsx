'use client'

import Link from 'next/link'
import { Mail, Heart, Users, DollarSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-red flex items-center justify-center bg-primary-beige">
                <img src="/images/bricklabs-logo.jpg" alt="BrickLabs Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold">BrickLabs</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Building the future through Lego Technic. Join our community of builders, 
              engineers, and creators as we explore the principles of mechanics and engineering.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@bricklabclips" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-red transition-colors flex items-center gap-2">
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">T</span>
                TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-gray-300 hover:text-primary-red transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/competition" className="text-gray-300 hover:text-primary-red transition-colors">
                  Competition
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-300 hover:text-primary-red transition-colors">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Opportunities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sponsorship" className="text-gray-300 hover:text-primary-red transition-colors flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/charity" className="text-gray-300 hover:text-primary-red transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Charity
                </Link>
              </li>
              <li>
                <Link href="/creator-opportunities" className="text-gray-300 hover:text-primary-red transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Creator Opportunities
                </Link>
              </li>
              <li>
                <a href="mailto:majidsafwaan2@gmail.com" className="text-gray-300 hover:text-primary-red transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BrickLabs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-red transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-red transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-primary-red transition-colors text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 