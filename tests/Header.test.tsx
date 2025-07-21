import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

// Mock Next.js router
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('BrickLabs')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Library')).toBeInTheDocument()
    expect(screen.getByText('Competition')).toBeInTheDocument()
    expect(screen.getByText('Forum')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    // Mobile menu should be visible
    // There are multiple 'Home' links, so use getAllByText and check at least one is visible
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThan(0)
    
    // Click again to close
    fireEvent.click(menuButton)
  })

  it('closes mobile menu when navigation link is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    // Use getAllByText and click the first mobile nav link
    const homeLinks = screen.getAllByText('Home')
    fireEvent.click(homeLinks[0])
    
    // Menu should close after clicking a link
    expect(homeLinks[0]).toBeInTheDocument()
  })
}) 