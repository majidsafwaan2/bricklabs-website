'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Trophy, Heart, Users, Youtube, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-beige to-primary-sand py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-red flex items-center justify-center bg-primary-beige">
              <img src="/images/bricklabs-logo.png" alt="BrickLabs Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-gradient">BrickLabs</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Build, learn, and compete with the ultimate Lego Technic community. 
              Discover engineering principles through hands-on building.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/library" className="btn-primary">
                Explore Library
              </Link>
              <Link href="/competition" className="btn-secondary">
                Join Competition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card text-center"
            >
              <BookOpen className="w-12 h-12 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Build Library</h3>
              <p className="text-gray-600">Hundreds of detailed guides with engineering principles</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center"
            >
              <Trophy className="w-12 h-12 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-gray-600">"Build Your Dreams" online competitions with prizes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center"
            >
              <Heart className="w-12 h-12 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Charity</h3>
              <p className="text-gray-600">Supporting STEM education through Lego donations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center"
            >
              <Users className="w-12 h-12 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Connect with fellow builders and creators</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Gearbox Mechanisms</h3>
              <p className="text-gray-600 mb-4">Learn about different gear ratios and mechanical advantage</p>
              <Link href="/library/basic-gearbox-3-speeds" className="text-primary-red font-semibold">
                Read More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Pneumatic Systems</h3>
              <p className="text-gray-600 mb-4">Explore air pressure and fluid dynamics</p>
              <Link href="/library/pneumatic-excavator-arm" className="text-primary-red font-semibold">
                Read More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Motor Control</h3>
              <p className="text-gray-600 mb-4">Master electronic motor programming</p>
              <Link href="/library/differential-drive-robot" className="text-primary-red font-semibold">
                Read More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Follow Our Journey</h2>
          <p className="text-xl text-gray-600 mb-12">Check us out on TikTok</p>
          <div className="flex justify-center gap-8">
            <a href="https://www.tiktok.com/@bricklabclips" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary-red transition-colors">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black">
                <span className="text-white text-2xl font-bold">T</span>
              </span>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 