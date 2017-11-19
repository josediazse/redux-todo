import React from 'react'
import TodoItem from './TodoItem'
import { arrayOf, func } from 'prop-types'
import todoType from './Types'

TodoList.propTypes = {
  todos: arrayOf(todoType).isRequired,
  toogleFunc: func.isRequired
}

TodoList.defaultProps = {
  todos: []
}

function TodoList({ todos, toogleFunc }) {
  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => {
            return (
              <TodoItem key={todo.id} todo={todo} toggleFunc={toogleFunc} />
            )
          })
        ) : (
          <p>Nothing TODO!</p>
        )}
      </ul>
    </div>
  )
}

export default TodoList
