'use client'

import { useState } from 'react'
import { Search, BookOpen, Settings, Filter } from 'lucide-react'
import Link from 'next/link'
import { libraryData } from '@/data/libraryData'

export default function Library() {
  const [mode, setMode] = useState<'basic' | 'advanced'>('basic')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'vehicles', name: 'Vehicles & Transportation' },
    { id: 'machines', name: 'Machines & Mechanisms' },
    { id: 'robotics', name: 'Robotics & Automation' },
    { id: 'structures', name: 'Structures & Architecture' },
    { id: 'electronics', name: 'Electronics & Programming' },
    { id: 'pneumatics', name: 'Pneumatic Systems' },
    { id: 'gearboxes', name: 'Gearboxes & Transmissions' },
    { id: 'sensors', name: 'Sensors & Control Systems' },
    { id: 'motors', name: 'Motors & Actuators' }
  ]

  const filteredArticles = libraryData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.engineeringPrinciples.some(principle => 
                           principle.toLowerCase().includes(searchTerm.toLowerCase())
                         )
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Build Library</h1>
              <p className="text-gray-600">
                Discover hundreds of detailed guides with engineering principles
              </p>
            </div>
            
            {/* Mode Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Mode:</span>
                <div className="flex bg-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setMode('basic')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      mode === 'basic'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Basic
                  </button>
                  <button
                    onClick={() => setMode('advanced')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      mode === 'advanced'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Advanced
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, engineering principles, or build types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-gray-600">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/library/${article.slug}`}
              className="card hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-gray-500" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-red uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-red transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.description}
                </p>

                {mode === 'advanced' && (
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Engineering Principles:</p>
                    <div className="flex flex-wrap gap-1">
                      {article.engineeringPrinciples.slice(0, 3).map((principle, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {principle}
                        </span>
                      ))}
                      {article.engineeringPrinciples.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{article.engineeringPrinciples.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 