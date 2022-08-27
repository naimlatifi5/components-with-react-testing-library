import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Checkbox from '../Checkbox'

describe('Test suit for Checkbox', () => {
  it('It should render the Checkbox as unchecked with false value as default', () => {
    let { getByRole } = render(<Checkbox />)
    let checkbox = getByRole('checkbox')

    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
