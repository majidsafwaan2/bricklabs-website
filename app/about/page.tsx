'use client'

import { Heart, Users, BookOpen, Target, Award, Globe } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'We believe in the power of hands-on learning and engineering education'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community of builders, engineers, and creators'
    },
    {
      icon: BookOpen,
      title: 'Educational Excellence',
      description: 'Creating high-quality educational content that makes engineering accessible'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with Lego Technic'
    }
  ]

  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Articles Created', value: '500+' },
    { label: 'Community Members', value: '1,200+' },
    { label: 'Competitions Hosted', value: '12+' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-16 h-8 bg-primary-red rounded-sm"></div>
          </div>
          <h1 className="text-5xl font-bold mb-4">About BrickLabs</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Building the future through Lego Technic. We're passionate about engineering, 
            education, and creating a community of builders.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                BrickLabs was founded in 2019 by a group of engineers and Lego enthusiasts 
                who wanted to make engineering education more accessible and engaging. 
                What started as a small YouTube channel has grown into a comprehensive 
                platform for learning, building, and competing.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that everyone can be an engineer. Through our detailed tutorials, 
                engineering principles, and hands-on projects, we've helped thousands of 
                people discover their passion for building and engineering.
              </p>
              <p className="text-gray-600">
                Today, BrickLabs is more than just a website - it's a thriving community 
                of builders, creators, and learners who share our passion for Lego Technic 
                and engineering education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <value.icon className="w-16 h-16 text-primary-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To inspire the next generation of engineers and creators by making 
                engineering education accessible, engaging, and fun through Lego Technic.
              </p>
              <p className="text-gray-600">
                We believe that hands-on learning is the best way to understand 
                complex engineering concepts, and we're committed to providing 
                high-quality educational content that empowers people to build, 
                learn, and innovate.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To become the world's leading platform for Lego Technic education 
                and community building, reaching millions of learners worldwide.
              </p>
              <p className="text-gray-600">
                We envision a world where engineering education is accessible to everyone, 
                regardless of their background or resources, and where creativity 
                and innovation are celebrated and nurtured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <BookOpen className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Educational Content</h3>
              <p className="text-gray-600">
                Create detailed tutorials, engineering guides, and educational videos 
                that make complex concepts accessible to learners of all ages.
              </p>
            </div>
            <div className="card text-center">
              <Users className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p className="text-gray-600">
                Foster a supportive community where builders can share ideas, 
                get help, and collaborate on projects.
              </p>
            </div>
            <div className="card text-center">
              <Award className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Competitions</h3>
              <p className="text-gray-600">
                Host engaging competitions that challenge builders to push their 
                creativity and engineering skills to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600 mb-8">
              Since our founding, we've made a significant impact on engineering education 
              and the Lego Technic community.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red mb-2">50K+</div>
                <div className="text-gray-600">Social Media Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red mb-2">500+</div>
                <div className="text-gray-600">Educational Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red mb-2">$15K+</div>
                <div className="text-gray-600">Donated to STEM Education</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-red mb-2">25+</div>
                <div className="text-gray-600">Schools Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about BrickLabs? Want to collaborate or just say hello? 
              We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:example@gmail.com" 
                className="btn-primary"
              >
                Send us an email
              </a>
              <a 
                href="/forum" 
                className="btn-secondary"
              >
                Join our community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 