'use client'

import { useState } from 'react'
import { MessageSquare, Plus, Search, Users, TrendingUp, Clock, ThumbsUp } from 'lucide-react'

interface ForumPost {
  id: string
  title: string
  author: string
  content: string
  category: string
  replies: number
  views: number
  likes: number
  timestamp: string
  isSticky?: boolean
}

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const categories = [
    { id: 'all', name: 'All Topics', color: 'bg-gray-500' },
    { id: 'general', name: 'General Discussion', color: 'bg-blue-500' },
    { id: 'builds', name: 'Build Showcase', color: 'bg-green-500' },
    { id: 'help', name: 'Help & Support', color: 'bg-yellow-500' },
    { id: 'competition', name: 'Competition Talk', color: 'bg-purple-500' },
    { id: 'techniques', name: 'Building Techniques', color: 'bg-red-500' },
    { id: 'parts', name: 'Parts & Sets', color: 'bg-indigo-500' }
  ]

  const samplePosts: ForumPost[] = [
    {
      id: '1',
      title: 'My first gearbox build - need feedback!',
      author: 'LegoBuilder123',
      content: 'Just finished building my first gearbox following the library guide. It works but seems a bit noisy. Any tips?',
      category: 'builds',
      replies: 8,
      views: 45,
      likes: 12,
      timestamp: '2 hours ago',
      isSticky: true
    },
    {
      id: '2',
      title: 'Best motors for heavy lifting?',
      author: 'TechMaster',
      content: 'I\'m working on a crane project and need recommendations for motors that can handle heavy loads.',
      category: 'help',
      replies: 15,
      views: 89,
      likes: 23,
      timestamp: '5 hours ago'
    },
    {
      id: '3',
      title: 'Competition submission tips',
      author: 'CompetitionPro',
      content: 'Here are some tips I learned from last year\'s competition that might help this year\'s participants.',
      category: 'competition',
      replies: 22,
      views: 156,
      likes: 34,
      timestamp: '1 day ago',
      isSticky: true
    },
    {
      id: '4',
      title: 'New pneumatic cylinder techniques',
      author: 'PneumaticGuru',
      content: 'I discovered some interesting ways to use pneumatic cylinders that aren\'t in the library yet.',
      category: 'techniques',
      replies: 6,
      views: 67,
      likes: 18,
      timestamp: '2 days ago'
    },
    {
      id: '5',
      title: 'Where to buy specific Technic parts?',
      author: 'PartsHunter',
      content: 'Looking for some specific gears that aren\'t available in my local stores. Any online recommendations?',
      category: 'parts',
      replies: 12,
      views: 78,
      likes: 9,
      timestamp: '3 days ago'
    }
  ]

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Community Forum</h1>
              <p className="text-gray-600">
                Connect with fellow builders, share your projects, and get help
              </p>
            </div>
            
            {!isLoggedIn ? (
              <div className="flex gap-3">
                <button className="btn-secondary">Sign In</button>
                <button className="btn-primary">Join Community</button>
              </div>
            ) : (
              <button className="btn-primary flex items-center gap-2">
                <Plus className="w-5 h-5" />
                New Post
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
            />
          </div>

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
      </div>

      {/* Forum Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Posts List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                    post.isSticky ? 'bg-yellow-50' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-500" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {post.isSticky && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                            Sticky
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded text-white ${
                          categories.find(c => c.id === post.category)?.color || 'bg-gray-500'
                        }`}>
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-red cursor-pointer">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span>by {post.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.timestamp}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {post.replies}
                          </span>
                          <span>{post.views} views</span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No discussions found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or category filter
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Members</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Topics</span>
                  <span className="font-semibold">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts</span>
                  <span className="font-semibold">3,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Online Now</span>
                  <span className="font-semibold text-green-600">23</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-red text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Trending
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <a href="#" className="text-gray-900 hover:text-primary-red font-medium">
                    Competition submission tips
                  </a>
                  <p className="text-gray-500 text-xs mt-1">15 replies • 2 hours ago</p>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-gray-900 hover:text-primary-red font-medium">
                    New pneumatic techniques
                  </a>
                  <p className="text-gray-500 text-xs mt-1">8 replies • 4 hours ago</p>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-gray-900 hover:text-primary-red font-medium">
                    Best motors for heavy lifting
                  </a>
                  <p className="text-gray-500 text-xs mt-1">12 replies • 6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 