import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  state = {
    todoItems: ['Item 1', 'Item 2']
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoItems ? (
            this.state.todoItems.map(todo => {
              return <TodoItem key={todo} text={todo} toggleFunc={() => {}} />
            })
          ) : (
            <p>Great You have DONE them all!</p>
          )}
        </ul>
      </div>
    )
  }
}
