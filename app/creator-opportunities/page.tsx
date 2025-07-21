'use client'

import { useState } from 'react'
import { Users, Gift, DollarSign, Video, Mail, TrendingUp, Award } from 'lucide-react'

export default function CreatorOpportunities() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialLinks: '',
    hasLegoTechnic: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const benefits = [
    {
      icon: Gift,
      title: 'Free Lego Technic Sets',
      description: 'Receive the latest Lego Technic sets to build and showcase in your content'
    },
    {
      icon: DollarSign,
      title: 'Paid Collaborations',
      description: 'Earn money through sponsored content and paid video collaborations'
    },
    {
      icon: TrendingUp,
      title: 'Exposure & Growth',
      description: 'Get featured on our growing social media channels and website'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our exclusive creator community and network with fellow builders'
    }
  ]

  const requirements = [
    'Active social media presence (YouTube, Instagram, or TikTok)',
    'Interest in Lego Technic and engineering content',
    'Ability to create high-quality video content',
    'Consistent posting schedule',
    'Engagement with audience and community'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <Users className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Creator Opportunities</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our creator network and get access to free Lego Technic sets, 
            paid collaborations, and a growing community of builders.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <Gift className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">Free Sets</div>
              <div className="text-sm opacity-90">Latest Technic sets</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">Paid Work</div>
              <div className="text-sm opacity-90">Sponsored content</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">Growth</div>
              <div className="text-sm opacity-90">Exposure & community</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <benefit.icon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Requirements</h2>
            <div className="card">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">
                  Fill out our application form and tell us about your content
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Review</h3>
                <p className="text-gray-600 text-sm">
                  We review your application and get back to you within 48 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Start Creating</h3>
                <p className="text-gray-600 text-sm">
                  Receive your first Lego Technic set and start creating content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
            <p className="text-gray-600 text-center mb-8">
              Ready to join our creator network? Fill out the form below and we'll 
              get back to you within 48 hours.
            </p>

            <form onSubmit={handleSubmit} className="card space-y-6">
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
                  Social Media Links *
                </label>
                <input
                  type="text"
                  name="socialLinks"
                  required
                  value={formData.socialLinks}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="YouTube, Instagram, TikTok, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you already have access to Lego Technic sets? *
                </label>
                <select
                  name="hasLegoTechnic"
                  required
                  value={formData.hasLegoTechnic}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I have access to Lego Technic sets</option>
                  <option value="no">No, I don't have access to Lego Technic sets</option>
                  <option value="some">I have some basic Lego Technic sets</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Creation Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="professional">Professional content creator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself and your content *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Tell us about your content style, audience, and why you'd like to join our creator network..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Submit Application
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">Or contact us directly:</p>
              <a 
                href="mailto:example@gmail.com" 
                className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
              >
                <Mail className="w-5 h-5" />
                example@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 