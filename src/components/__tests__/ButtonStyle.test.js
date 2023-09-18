import { render, screen, fireEvent } from '@testing-library/react'
import ButtonStyle from '../ButtonStyle.js'

describe('Test suit for button component', () => {
  const handleClick = jest.fn()

  test('It should check button enabled on initial render', () => {
    render(<ButtonStyle />)
    const btn = screen.queryByTestId('button')
    // check if button is enabled
    expect(btn).toBeEnabled()
  })

  test('button has correct initial text', () => {
    render(<ButtonStyle />)
    const btn = screen.getByRole('button', { name: 'Change button to green' })
    expect(btn).toHaveStyle({ backgroundColor: 'red' })
  })

  test('It should check if button is clicked with handler function as prop and only once', () => {
    render(<ButtonStyle handleClick={handleClick} />)
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(handleClick).toBeCalledTimes(1)
    //expect(mockHandler.mock.calls).toHaveLength(1)
  })

  test('It should check on button click that background color should change to green', () => {
    render(<ButtonStyle handleClick={handleClick} />)
    const btn = screen.getByRole('button')
    // on button click
    fireEvent.click(btn)
    expect(btn).toHaveStyle({ backgroundColor: 'green' })
    expect(btn.textContent).toEqual('Change button to red')
    expect(handleClick).toBeCalledTimes(1)
  })
})
