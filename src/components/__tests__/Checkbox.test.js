import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from '../Checkbox'

describe('Test suit for Checkbox', () => {
  it('It should render the Checkbox as unchecked with false value as default', () => {
    render(<Checkbox />)
    let checkbox = screen.getByRole('checkbox')

    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
