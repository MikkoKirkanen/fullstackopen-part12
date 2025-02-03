import PropTypes from 'prop-types'
import {
  CheckSquareFill,
  PencilSquare,
  Square,
  Trash,
} from 'react-bootstrap-icons'

const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const getButtons = () => (
    <td className='text-end'>
      {getDoneButton()}
      <button
        className='btn btn-danger'
        title='Delete'
        onClick={() => onClickDelete(todo)}
      >
        <Trash />
      </button>
    </td>
  )

  const getDoneButton = () => {
    if (!todo.done)
      return (
        <button
          className='btn btn-primary me-3'
          title='Complete'
          onClick={() => onClickComplete(todo)}
        >
          <PencilSquare />
        </button>
      )
  }

  const status = todo.done ? (
    <CheckSquareFill className='text-success' />
  ) : (
    <Square />
  )

  return (
    <tr>
      <td className='align-middle'>{todo.text}</td>
      <td className='fs-3'>{status}</td>
      {getButtons()}
    </tr>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickComplete: PropTypes.func,
}

export default Todo
