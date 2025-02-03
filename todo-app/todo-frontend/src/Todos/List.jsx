import Todo from './Todo'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const TodoList = ({ todos, deleteTodo, completeTodo }) => (
  <div className='d-flex justify-content-center'>
    <Table className='w-auto' size='sm' striped borderless>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            onClickDelete={deleteTodo}
            onClickComplete={completeTodo}
          />
        ))}
      </tbody>
    </Table>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
}

export default TodoList
