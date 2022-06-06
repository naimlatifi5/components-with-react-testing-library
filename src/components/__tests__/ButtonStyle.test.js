import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'
import ButtonStyle from '../ButtonStyle.js'

test('It should check button enabled on initial render', () => {
  render(<ButtonStyle />)
  const btn = screen.getByRole('button')
  // check if button is enabled
  expect(btn).toBeEnabled()
})
test('button has correct initial text', () => {
  render(<ButtonStyle />)
  const btn = screen.getByRole('button', { name: 'Change button to green' })
  expect(btn).toHaveStyle({ backgroundColor: 'red' })
})

test('It should check if button is clicked with handler function as prop and only once', () => {
  const mockHandler = jest.fn()
  render(<ButtonStyle handleClick={mockHandler} />)
  const btn = screen.getByRole('button')
  fireEvent.click(btn)
  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('It should check on button click that background color should change to green', () => {
  const mockHandler = jest.fn()
  render(<ButtonStyle handleClick={mockHandler} />)
  const btn = screen.getByRole('button')
  // on button click
  fireEvent.click(btn)
  expect(btn).toHaveStyle({ backgroundColor: 'green' })
  expect(btn.textContent).toEqual('Change button to red')
})
