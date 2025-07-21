'use client'

import { Heart, Users, BookOpen, Globe, TrendingUp, Award } from 'lucide-react'

export default function Charity() {
  const impactStats = [
    { label: 'Total Donated', value: '$15,000+', icon: Heart },
    { label: 'Lego Kits Donated', value: '500+', icon: BookOpen },
    { label: 'Schools Supported', value: '25+', icon: Users },
    { label: 'Students Reached', value: '2,500+', icon: Globe }
  ]

  const charities = [
    {
      name: 'First Robotics',
      description: 'Supporting robotics education in underserved communities',
      logo: '🤖',
      impact: 'Helped fund 15 robotics teams'
    },
    {
      name: 'Girls Who Code',
      description: 'Closing the gender gap in technology',
      logo: '💻',
      impact: 'Sponsored 50+ students'
    },
    {
      name: 'Local STEM Programs',
      description: 'Supporting local schools with STEM resources',
      logo: '🏫',
      impact: 'Provided kits to 20 schools'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <Heart className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Charitable Initiatives</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Supporting STEM education and inspiring the next generation of engineers 
            through Lego Technic donations and educational programs.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At BrickLabs, we believe that every child deserves access to quality STEM education. 
              Through our sponsorship revenue, we donate Lego Technic sets to underprivileged schools 
              and support organizations that promote engineering and robotics education.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Growing Impact</h3>
                <p className="text-gray-600">
                  Our donations have grown from $2,000 in 2022 to over $15,000 in 2024, 
                  reaching thousands of students.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  We prioritize schools and programs in underserved communities 
                  where STEM resources are limited.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
                <p className="text-gray-600">
                  We partner with organizations that provide comprehensive 
                  STEM education programs, not just toys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Organizations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {charities.map((charity, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{charity.logo}</div>
                <h3 className="text-xl font-semibold mb-2">{charity.name}</h3>
                <p className="text-gray-600 mb-4">{charity.description}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {charity.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Sponsorships</h3>
                <p className="text-gray-600 text-sm">
                  Companies sponsor our content and competitions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                <p className="text-gray-600 text-sm">
                  A portion of sponsorship revenue goes to charity
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Donations</h3>
                <p className="text-gray-600 text-sm">
                  We purchase Lego Technic sets and donate them
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-gray-600 text-sm">
                  Students learn engineering principles hands-on
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-gray-600 mb-8">
              Want to help us make an even bigger impact? Here are ways you can contribute 
              to our charitable initiatives.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card text-center">
                <h3 className="text-xl font-semibold mb-3">Suggest Organizations</h3>
                <p className="text-gray-600 mb-4">
                  Know a school or organization that could benefit from our donations?
                </p>
                <a 
                  href="mailto:example@gmail.com" 
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Contact Us →
                </a>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold mb-3">Become a Sponsor</h3>
                <p className="text-gray-600 mb-4">
                  Your sponsorship directly supports our charitable giving program.
                </p>
                <a 
                  href="/sponsorship" 
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 