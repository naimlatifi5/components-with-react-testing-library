import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Input from '../Input.js'

describe('Test suit for input', () => {
  it('It should render the input with empty value', () => {
    let { getByRole } = render(<Input value="" />)
    let inputText = getByRole('textbox')
    expect(inputText).toHaveValue('')
    fireEvent.change(inputText, { target: { value: 'hej' } })
    expect(inputText).toHaveValue('hej')
  })
})
