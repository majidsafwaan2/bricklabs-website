'use client'

import { useState } from 'react'
import { DollarSign, Users, TrendingUp, Mail, Target, BarChart3 } from 'lucide-react'

export default function Sponsorship() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    budget: '',
    campaignType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const stats = [
    { label: 'Monthly Views', value: '8 Million+', icon: TrendingUp },
    { label: 'Followers', value: '10k+', icon: Users },
    { label: 'Monthly Website Visitors', value: '40k+', icon: BarChart3 },
    { label: 'Avg. Engagement Rate', value: '8.5%', icon: DollarSign }
  ]

  const opportunities = [
    {
      title: 'Social Media Sponsorship',
      description: 'Sponsored posts on our TikTok channel',
      features: ['Product placement in build videos', 'Dedicated sponsored content', 'Brand mentions and tags', 'Performance analytics'],
      price: 'Starting at $500'
    },
    {
      title: 'Library Content Sponsorship',
      description: 'Sponsor educational content in our build library',
      features: ['Branded tutorial videos', 'Product showcases', 'Educational partnerships', 'Long-term content visibility'],
      price: 'Starting at $750'
    },
    {
      title: 'Competition Sponsorship',
      description: 'Sponsor our "Build Your Dreams" competitions',
      features: ['Brand integration in competition theme', 'Logo placement on all materials', 'Judging panel participation', 'Winner announcement features'],
      price: 'Starting at $1,000'
    },
    {
      title: 'Community Partnership',
      description: 'Long-term partnership with our community',
      features: ['Exclusive community access', 'Regular brand presence', 'Co-created content', 'Direct audience engagement'],
      price: 'Custom pricing'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <DollarSign className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Sponsorship Opportunities</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with BrickLabs to reach our engaged community of Lego Technic enthusiasts, 
            engineers, and creators.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Partner With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With BrickLabs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Targeted Audience</h3>
              <p className="text-gray-600">
                Reach engineers, educators, students, and Lego enthusiasts who are passionate 
                about building and learning.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Growing Community</h3>
              <p className="text-gray-600">
                Our community is rapidly expanding with high engagement rates and 
                active participation in all our initiatives.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Authentic Content</h3>
              <p className="text-gray-600">
                We create genuine, educational content that resonates with our audience 
                and builds trust with your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <ul className="space-y-2 mb-6">
                  {opportunity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-primary-red">{opportunity.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <p className="text-gray-600 text-center mb-8">
              Ready to partner with us? Fill out the form below and we'll get back to you 
              within 24 hours to discuss your sponsorship opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Type
                </label>
                <select
                  name="campaignType"
                  value={formData.campaignType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select a campaign type</option>
                  <option value="social-media">Social Media Sponsorship</option>
                  <option value="competition">Competition Sponsorship</option>
                  <option value="library">Library Content Sponsorship</option>
                  <option value="community">Community Partnership</option>
                  <option value="custom">Custom Campaign</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select budget range</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                  <option value="custom">Custom Budget</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Tell us about your campaign goals and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">Or contact us directly:</p>
              <a 
                href="mailto:majidsafwaan2@gmail.com" 
                className="flex items-center justify-center gap-2 text-primary-red hover:text-red-700 font-semibold"
              >
                <Mail className="w-5 h-5" />
                majidsafwaan2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 