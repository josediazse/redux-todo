import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { array } from 'prop-types'

export default class TodoList extends Component {
  state = {
    todoItems: this.props.todoItems
  }

  static propTypes = {
    todoItems: array
  }

  static defaultProps = {
    todoItems: []
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoItems.length > 0 ? (
            this.state.todoItems.map(todo => {
              return <TodoItem key={todo.id} text={todo.text} toggleFunc={() => {}} />
            })
          ) : (
            <p>Great You have DONE them all!</p>
          )}
        </ul>
      </div>
    )
  }
}
