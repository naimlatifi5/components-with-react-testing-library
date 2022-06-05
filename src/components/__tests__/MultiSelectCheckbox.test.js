import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'
import MultiSelectCheckBox from '../MultiSelectCheckBox.js'
const mockedCheckboxes = [
  { label: 'checkbox 1', checked: false },
  { label: 'checkbox 2', checked: false },
]
describe('Checkboxes testing', () => {
  afterEach(cleanup)
  test('It should render checkboxes and display a list of them', async () => {
    render(<MultiSelectCheckBox options={mockedCheckboxes} />)
    const checkBoxes = screen
      .getAllByTestId('checkbox-labels')
      .map((label) => label.textContent)
    const fakeCheckboxes = mockedCheckboxes.map((item) => item.label)
    expect(checkBoxes).toEqual(fakeCheckboxes)
    expect(checkBoxes).toHaveLength(2)
  })

  test('Check if checkbox is checked or not checked', async () => {
    render(<MultiSelectCheckBox options={mockedCheckboxes} />)

    const checkBoxes = screen.getAllByTestId('checkbox').map((item) => {
      // on initial load expect checkbox to be false
      expect(item.checked).toEqual(false)
      fireEvent.change(item)
    })
  })
})
