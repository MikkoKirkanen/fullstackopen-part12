import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from '../src/Todos/Todo'

const todo = {
  text: 'Testing',
  done: false,
  _id: 1,
}

describe('<Todo />', () => {
  it('should render todo', () => {
    render(
      <table>
        <tbody>
          <Todo todo={todo} onClickComplete={null} onClickDelete={null} />
        </tbody>
      </table>
    )
    expect(screen.getByText('Testing')).toBeVisible()
  })
})
