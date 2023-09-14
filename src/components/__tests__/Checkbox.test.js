import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from '../Checkbox'

describe('Test suit for Checkbox', () => {
  it(`It should render the Checkbox as unchecked with false value as default`, () => {
    // find multiple checkboxes by names
    render(<Checkbox />)
    let checkbox = screen.getByRole('checkbox', {name: 'Another checkbox'})

    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

    it('It should find the label to checkbox', () => {
    render(<Checkbox />)
    let checkbox = screen.getByRole('checkbox', { name: 'Toggle checkbox' })
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
