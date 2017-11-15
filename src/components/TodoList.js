import React from 'react'
import TodoItem from './TodoItem'
import { array } from 'prop-types'

TodoList.propTypes = {
  todos: array.isRequired
}

TodoList.defaultProps = {
  todos: []
}

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => {
            return (
              <TodoItem key={todo.id} text={todo.text} toggleFunc={() => {}} />
            )
          })
        ) : (
          <p>Great You have DONE them all!</p>
        )}
      </ul>
    </div>
  )
}

export default TodoList
