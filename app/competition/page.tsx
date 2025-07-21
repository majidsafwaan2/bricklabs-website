'use client'

import { useState } from 'react'
import { Trophy, Calendar, Users, Award, Upload, FileText, Video, Camera } from 'lucide-react'

export default function Competition() {
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(true) // For demo purposes
  const [activeTab, setActiveTab] = useState('overview')

  const competitionDates = {
    startDate: '2024-01-15',
    endDate: '2024-03-15',
    submissionDeadline: '2024-03-10',
    winnersAnnounced: '2024-03-20'
  }

  const prizes = [
    {
      place: '1st Place',
      prize: '$500 in Lego Technic sets',
      description: 'Plus featured on our social media channels'
    },
    {
      place: '2nd Place',
      prize: '$300 in Lego Technic sets',
      description: 'Plus featured on our social media channels'
    },
    {
      place: '3rd Place',
      prize: '$200 in Lego Technic sets',
      description: 'Plus featured on our social media channels'
    },
    {
      place: 'Honorable Mentions',
      prize: '$50 in Lego Technic sets',
      description: 'For up to 5 additional outstanding entries'
    }
  ]

  const rules = [
    'Builds must be original and created specifically for this competition',
    'Lego Technic sets are preferred but not mandatory',
    'Video submissions must be high quality (1080p minimum)',
    'Good lighting is essential - natural light or proper studio lighting',
    'Videos should be 30 seconds to 3 minutes in length',
    'Include a brief explanation of your build and the engineering principles used',
    'Submissions must use elements from our library articles',
    'One entry per person',
    'Must be 13 years or older to participate',
    'By submitting, you grant BrickLabs permission to feature your content'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <Trophy className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Build Your Dreams</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Show off your engineering skills in our biggest Lego Technic competition yet. 
            Build, innovate, and compete for amazing prizes!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Deadline: March 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Open to all ages 13+</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>$1,000+ in prizes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Trophy },
              { id: 'rules', label: 'Rules & Guidelines', icon: FileText },
              { id: 'prizes', label: 'Prizes', icon: Award },
              { id: 'submit', label: 'Submit Entry', icon: Upload }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-red text-primary-red'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Competition Overview</h2>
              <p className="text-gray-600 mb-6">
                "Build Your Dreams" is our flagship competition that challenges builders to create 
                innovative Lego Technic models while learning real engineering principles. 
                Whether you're a beginner or advanced builder, this competition is for you!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">What to Build</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Any Lego Technic model of your choice</li>
                    <li>• Must incorporate engineering principles from our library</li>
                    <li>• Can be vehicles, machines, robots, or structures</li>
                    <li>• Originality and creativity are highly valued</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">How to Enter</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Build your model using our library as inspiration</li>
                    <li>• Record a high-quality video showcasing your build</li>
                    <li>• Submit through our online portal</li>
                    <li>• Include explanation of engineering principles used</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Competition Start:</span>
                    <span className="font-semibold">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Submission Deadline:</span>
                    <span className="font-semibold text-primary-red">March 10, 2024</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Competition End:</span>
                    <span className="font-semibold">March 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Winners Announced:</span>
                    <span className="font-semibold">March 20, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rules Tab */}
        {activeTab === 'rules' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Competition Rules & Guidelines</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Eligibility</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Open to individuals 13 years of age or older</li>
                    <li>• International entries welcome</li>
                    <li>• One entry per person</li>
                    <li>• Team entries are not allowed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Build Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Must be an original creation for this competition</li>
                    <li>• Lego Technic sets are preferred but not mandatory</li>
                    <li>• Must incorporate engineering principles from our library</li>
                    <li>• No size restrictions, but must be practical to video</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Video Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Minimum 1080p resolution</li>
                    <li>• Good lighting (natural light or studio lighting)</li>
                    <li>• 30 seconds to 3 minutes in length</li>
                    <li>• Clear audio for explanations</li>
                    <li>• Show all sides and functions of your build</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Submission Guidelines</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Submit through our online portal only</li>
                    <li>• Include written explanation of engineering principles</li>
                    <li>• List parts used (approximate is fine)</li>
                    <li>• Provide contact information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Judging Criteria</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Creativity and originality (30%)</li>
                    <li>• Engineering principles demonstrated (25%)</li>
                    <li>• Build quality and complexity (20%)</li>
                    <li>• Video presentation quality (15%)</li>
                    <li>• Use of library resources (10%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Prizes Tab */}
        {activeTab === 'prizes' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Prizes & Recognition</h2>
              <p className="text-gray-600 mb-8">
                We're giving away over $1,000 in Lego Technic sets and amazing opportunities 
                to showcase your work to our growing community!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {prizes.map((prize, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-yellow-600' : 'bg-primary-red'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold">{prize.place}</h3>
                    </div>
                    <p className="text-xl font-bold text-primary-red mb-2">{prize.prize}</p>
                    <p className="text-gray-600">{prize.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Additional Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Social Media Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Featured on our YouTube channel</li>
                    <li>• Instagram and TikTok highlights</li>
                    <li>• Community showcase on our website</li>
                    <li>• Interview opportunities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Community Recognition</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Special badge on our forum</li>
                    <li>• Invitation to exclusive events</li>
                    <li>• Potential collaboration opportunities</li>
                    <li>• Recognition in our newsletter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Tab */}
        {activeTab === 'submit' && (
          <div className="max-w-2xl mx-auto">
            {isSubmissionOpen ? (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Submit Your Entry</h2>
                
                <form className="space-y-6 flex flex-col w-full">
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      required
                      min="13"
                      className="input-field"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Build Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="Give your build a creative name"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Engineering Principles Used *
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="input-field"
                      placeholder="Describe the engineering principles demonstrated in your build"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Build Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="input-field"
                      placeholder="Tell us about your build, what inspired it, and how it works"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Video Upload *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag and drop your video file here, or click to browse
                      </p>
                      <p className="text-sm text-gray-500">
                        MP4, MOV, or AVI files up to 500MB
                      </p>
                      <input
                        type="file"
                        accept="video/*"
                        required
                        className="hidden"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Build Photos (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Upload additional photos of your build
                      </p>
                      <p className="text-sm text-gray-500">
                        JPG or PNG files up to 10MB each
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 w-full">
                    <input
                      type="checkbox"
                      required
                      className="mt-1"
                    />
                    <label className="text-sm text-gray-600">
                      I confirm that this is my original work and I grant BrickLabs permission 
                      to feature my submission on their website and social media channels.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Submit Entry
                  </button>
                </form>
              </div>
            ) : (
              <div className="card text-center">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Submissions Closed</h2>
                <p className="text-gray-600 mb-6">
                  The submission period for this competition has ended. 
                  Check back soon for our next competition!
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    Next competition will be announced in April 2024
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 