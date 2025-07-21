'use client'

import { useParams, notFound } from 'next/navigation'
import { libraryData } from '@/data/libraryData'
import Link from 'next/link'

export default function LibraryArticlePage() {
  const { slug } = useParams() as { slug: string }
  const article = libraryData.find(a => a.slug === slug)

  if (!article) return notFound()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{article.title}</h1>
          <div className="flex gap-4 text-sm text-gray-500 mb-4">
            <span>{article.category}</span>
            <span>{article.difficulty}</span>
            <span>{article.estimatedTime}</span>
            <span>Age {article.ageRange}+</span>
          </div>
          <p className="text-gray-700 mb-6">{article.description}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Parts List</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {article.partsList.map((part, i) => (
                <li key={i}>{part}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Engineering Principles</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {article.engineeringPrinciples.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">External Resources</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {article.externalLinks.tutorials.map((url, i) => (
                <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="text-primary-red underline">Tutorial</a></li>
              ))}
              {article.externalLinks.wikipedia.map((url, i) => (
                <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="text-primary-red underline">Wikipedia</a></li>
              ))}
              {article.externalLinks.youtube.map((url, i) => (
                <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="text-primary-red underline">YouTube</a></li>
              ))}
            </ul>
          </div>
          <Link href="/library" className="btn-secondary">Back to Library</Link>
        </div>
      </div>
    </div>
  )
} 