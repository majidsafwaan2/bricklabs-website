'use client'

import { Shield, Eye, Lock, Users } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: January 15, 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="card">
            <h2>Introduction</h2>
            <p>
              At BrickLabs, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you 
              visit our website and use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and email address (when you register or contact us)</li>
              <li>Social media links (for creator applications)</li>
              <li>Competition submissions and entries</li>
              <li>Forum posts and community interactions</li>
              <li>Chatbot conversations</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on site</li>
              <li>Device information and operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing competition entries and submissions</li>
              <li>Managing user accounts and forum participation</li>
              <li>Responding to inquiries and support requests</li>
              <li>Sending newsletters and updates (with consent)</li>
              <li>Analyzing website usage and performance</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
              <li>For competition winners (name and social media links only)</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze site usage, 
              and provide personalized content. You can control cookie settings through your browser.
            </p>

            <h2>Third-Party Services</h2>
            <p>We may use third-party services that collect information:</p>
            <ul>
              <li>Google Analytics (website analytics)</li>
              <li>Google Gemini AI (chatbot functionality)</li>
              <li>Social media platforms (for sharing and embedding)</li>
              <li>Payment processors (for competitions and donations)</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li>Access and review your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services 
              and comply with legal obligations. Competition entries may be retained for historical 
              purposes with your consent.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by posting the new policy on our website and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> example@gmail.com</p>
              <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
              <p><strong>Response Time:</strong> We aim to respond to privacy inquiries within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 