import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
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
                  text: `You are the BrickLabs assistant, a helpful AI for a Lego Technic community website. You help users with questions about:

1. Library articles and building guides
2. "Build Your Dreams" competitions
3. Charity initiatives and STEM education donations
4. Sponsorship and advertising opportunities
5. Creator opportunities and collaborations
6. General website navigation and features

Keep responses friendly, helpful, and concise. If you don't know something specific about BrickLabs, suggest they contact the team at example@gmail.com.

User question: ${message}`
                }
              ]
            }
          ]
        })
      }
    )

    if (!response.ok) {
      throw new Error('Failed to get response from Gemini API')
    }

    const data = await response.json()
    const botResponse = data.candidates[0].content.parts[0].text

    return NextResponse.json({ response: botResponse })
  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 