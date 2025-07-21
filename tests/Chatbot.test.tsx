import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Chatbot from '@/components/Chatbot'

// Mock fetch
global.fetch = jest.fn()

describe('Chatbot', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders chat button', () => {
    render(<Chatbot />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('opens chat window when button is clicked', () => {
    render(<Chatbot />)
    
    const chatButton = screen.getByRole('button')
    fireEvent.click(chatButton)
    
    expect(screen.getByText('BrickLabs Assistant')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument()
  })

  it('sends message when form is submitted', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ response: 'Test response' })
    })

    render(<Chatbot />)
    
    const chatButton = screen.getByRole('button')
    fireEvent.click(chatButton)
    
    const input = screen.getByPlaceholderText('Type your message...')
    const sendButton = screen.getByRole('button', { name: /send/i })
    
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(sendButton)
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Hello' })
      })
    })
  })

  it('displays error message when API call fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'))

    render(<Chatbot />)
    
    const chatButton = screen.getByRole('button')
    fireEvent.click(chatButton)
    
    const input = screen.getByPlaceholderText('Type your message...')
    const sendButton = screen.getByRole('button', { name: /send/i })
    
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(sendButton)
    
    await waitFor(() => {
      expect(screen.getByText(/I'm sorry, I'm having trouble connecting/)).toBeInTheDocument()
    })
  })
}) 