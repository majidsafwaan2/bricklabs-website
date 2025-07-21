import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!GEMINI_API_KEY) {
      console.error('Gemini API key is missing.')
      return NextResponse.json(
        { error: 'Chatbot is not configured. Please contact the site admin.' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are the BrickLabs assistant, a helpful AI for a Lego Technic community website. You help users with questions about:\n\n1. Library articles and building guides\n2. \"Build Your Dreams\" competitions\n3. Charity initiatives and STEM education donations\n4. Sponsorship and advertising opportunities\n5. Creator opportunities and collaborations\n6. General website navigation and features\n\nKeep responses friendly, helpful, and concise. If you don't know something specific about BrickLabs, suggest they contact the team at example@gmail.com.\n\nUser question: ${message}`
                }
              ]
            }
          ]
        })
      }
    )

    if (!response.ok) {
      let errorMsg = 'Failed to get response from Gemini API.'
      let details = await response.text()
      console.error('Gemini API error:', details)
      if (response.status === 403) {
        errorMsg = 'Access denied by Gemini API. Check your API key and billing.'
      } else if (response.status === 429) {
        errorMsg = 'Gemini API quota exceeded. Please try again later.'
      } else if (response.status === 400) {
        errorMsg = 'Invalid request sent to Gemini API.'
      }
      return NextResponse.json({ error: errorMsg }, { status: 500 })
    }

    const data = await response.json()
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.'

    return NextResponse.json({ response: botResponse })
  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later or contact support.' },
      { status: 500 }
    )
  }
} 