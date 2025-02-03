import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState('')

  const onChange = ({ target }) => {
    setText(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo({ text })
  }

  return (
    <div className='d-flex justify-content-center'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='d-flex flex-row mb-3'>
          <Form.Control
            type='text'
            name='text'
            value={text}
            onChange={onChange}
          />
          <Button type='submit' variant='primary' className='ms-3'>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

TodoForm.propTypes = {
  createTodo: PropTypes.func,
}

export default TodoForm
