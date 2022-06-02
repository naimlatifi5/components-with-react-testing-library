import { render, screen } from '@testing-library/react'

import App from './App'

test('renders learn react link', () => {
  render(<App />)
  // result of the render method
  //screen.debug()

  const linkElement = screen.getByText('Learn React')

  // assertion
  expect(linkElement).toBeInTheDocument()
})

test('It should render paragraph to the document', () => {
  render(<App />)
  // result of the render method
  //screen.debug()

  const paragraph = screen.getByText('Edit')

  // assertion
  expect(paragraph).toBeInTheDocument()
})
