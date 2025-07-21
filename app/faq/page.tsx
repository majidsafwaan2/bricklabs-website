'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs: FAQItem[] = [
    {
      question: "How do I participate in competitions?",
      answer: "To participate in our 'Build Your Dreams' competitions, simply visit the competition page, read the rules, and submit your entry through our online portal during the submission period."
    },
    {
      question: "Do I need Lego Technic sets to participate?",
      answer: "While Lego Technic sets are preferred, they're not mandatory. You can use any building materials, but your submission should demonstrate engineering principles."
    },
    {
      question: "How do I access the library articles?",
      answer: "The library is free to access. You can browse by category, use the search function, or toggle between basic and advanced modes to find the content you need."
    },
    {
      question: "Can I contribute content to the library?",
      answer: "Currently, library content is created by our team. However, we're working on a community contribution system. Contact us if you're interested in collaborating."
    },
    {
      question: "How do I join the forum?",
      answer: "You can join the forum by creating a free account. This allows you to participate in discussions, ask questions, and connect with other builders."
    },
    {
      question: "What are the prizes for competitions?",
      answer: "Competition prizes include Lego Technic sets, cash prizes, and social media features. Specific prizes are announced for each competition."
    },
    {
      question: "How do I apply for creator opportunities?",
      answer: "Visit our Creator Opportunities page and fill out the application form. We'll review your application and get back to you within 48 hours."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship competition prizes and creator sets internationally. Shipping costs and delivery times vary by location."
    },
    {
      question: "How can I support your charitable initiatives?",
      answer: "You can support our charitable work by becoming a sponsor, suggesting organizations to donate to, or participating in our community events."
    },
    {
      question: "Is the chatbot AI-powered?",
      answer: "Yes, our chatbot uses Google's Gemini AI to provide helpful responses about our website, competitions, and services."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Find answers to common questions about BrickLabs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Contact us directly and we'll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:example@gmail.com" 
              className="btn-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 