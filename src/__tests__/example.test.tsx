import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../pages/index'

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />)
    const headingElement = screen.getByText(/Hello world!/i)
    expect(headingElement).toBeInTheDocument()
  })
})
