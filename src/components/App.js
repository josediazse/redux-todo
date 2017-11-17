import React, { Component } from 'react'
import InputForm from './InputForm'
import FilterItems from './FilterItems'
import TodoList from './TodoList'
import Stats from './Stats'
import { array, string } from 'prop-types'
import styles from '../styles.css'

export default class App extends Component {
  state = {
    todos: this.props.todos,
    visibilityFilter: this.props.visibilityFilter
  }

  static propTypes = {
    todos: array.isRequired,
    visibilityFilter: string.isRequired
  }

  static defaultProps = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  }

  handleInput = text => {
    const id = this.getNextTodoId()
    this.setState(state => {
      return {
        todos: [
          {
            completed: false,
            id: id,
            text: text
          },
          ...state.todos
        ]
      }
    })
  }

  getNextTodoId = () => {
    const { todos } = this.state
    if (todos.length === 0) return 0
    else return todos.map(t => t.id).reduce((a, b) => Math.max(a, b)) + 1
  }

  handleToggleTodo = todo => {
    const updatedTodos = this.state.todos
    updatedTodos.forEach(t => {
      if (t.id === todo.id) t.completed = !t.completed
    })
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div style={styles} className="container">
        <Stats todos={todos} />
        <InputForm handleInput={this.handleInput} />
        <FilterItems />
        <TodoList todos={todos} toogleFunc={this.handleToggleTodo} />
      </div>
    )
  }
}
