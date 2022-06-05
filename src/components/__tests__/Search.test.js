import { render, screen, cleanup } from '@testing-library/react'
import SearchInput from '../SearchInput.js'

describe('Test suit for search input', () => {
  const mockChangeValue = jest.fn()
  const stubbedSearchValue = ''
  it('Should be the search with empty value', () => {
    render(
      <SearchInput
        value={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />,
    )
    expect(screen.getByTestId('search-input').value).toBe('')
  })
  it('triggers event handler on input change of name', () => {
    const changedSearchValue = 'Hej'
    render(
      <SearchInput
        value={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />,
    )
  })
})
