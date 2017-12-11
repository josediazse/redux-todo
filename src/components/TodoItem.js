import React from 'react'
import { func } from 'prop-types'
import todoType from './Types'

TodoItem.propTypes = {
  todo: todoType.isRequired,
  toggleFunc: func.isRequired
}

function TodoItem({ todo, toggleFunc }) {
  return (
    <li
      className={todo.completed ? 'done' : ''}
      onClick={() => toggleFunc(todo)}
    >
      {todo.text}
    </li>
  )
}

export default TodoItem
