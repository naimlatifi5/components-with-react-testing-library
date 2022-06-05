import { render, screen, cleanup, getByText } from '@testing-library/react'
import ToDos from '../TODOS.js'
describe('Test suit for for fetching data in async way', () => {
  test('It should render toDos on initial render', () => {
    render(<ToDos />)
    expect(screen.getByText('ToDos:')).toBeInTheDocument()
  })

  test('It should display a list of toDos   ', async () => {
    render(<ToDos />)
    expect(screen.getByTestId('todo-container')).toBeInTheDocument()
  })
})
