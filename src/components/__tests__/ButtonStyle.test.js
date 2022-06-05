import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'
import ButtonStyle from '../ButtonStyle.js'

test('It should check button on initial render', () => {
  render(<ButtonStyle />)
  const btn = screen.getByRole('button')
  // check if button is enabled
  expect(btn).toBeEnabled()
})
test('It should check if button is clicked with handler function as prop and only once', () => {
  const mockHandler = jest.fn()
  render(<ButtonStyle handleClick={mockHandler} />)
  const btn = screen.getByRole('button')
  fireEvent.click(btn)
  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('It should check if button has background color and on button click should change to green', () => {
  const mockHandler = jest.fn()
  render(<ButtonStyle handleClick={mockHandler} />)
  const btn = screen.getByRole('button')
  expect(btn).toHaveStyle({ backgroundColor: 'red' })
  expect(btn.textContent).toBe('Change button to green')
  // on button click
  fireEvent.click(btn)
  expect(btn).toHaveStyle({ backgroundColor: 'green' })
  expect(btn.textContent).toEqual('Change button to red')
})
