import { render, screen, cleanup } from '@testing-library/react'
import MultiSelectCheckBox from '../MultiSelectCheckBox.js'

describe('Checkboxes testing', () => {
  afterEach(cleanup)
  test('It should render checkboxes and display a list of them', async () => {
    const mockedCheckboxes = [{ label: 'checkbox 1' }, { label: 'checkbox 2' }]
    render(<MultiSelectCheckBox options={mockedCheckboxes} />)
    const checkBoxes = screen
      .getAllByTestId('checkbox-labels')
      .map((label) => label.textContent)
    const fakeCheckboxes = mockedCheckboxes.map((item) => item.label)
    expect(checkBoxes).toEqual(fakeCheckboxes)
    expect(checkBoxes).toHaveLength(2)
  })
})
