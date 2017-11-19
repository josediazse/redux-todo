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
    visibilityFilter: 'ALL'
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

  updateVisibilityFilter = filter => {
    this.setState({
      visibilityFilter: filter.target.value
    })
  }

  applyVisibilityFilter = () => {
    if (this.state.visibilityFilter === 'ALL') return this.state.todos
    else if (this.state.visibilityFilter === 'DONE')
      return this.state.todos.filter(t => t.completed === true)
    else if (this.state.visibilityFilter === 'PENDING')
      return this.state.todos.filter(t => t.completed === false)
  }

  render() {
    const todos = this.applyVisibilityFilter()
    return (
      <div style={styles} className="container">
        <Stats todos={todos} />
        <InputForm handleInput={this.handleInput} />
        <FilterItems handleChange={this.updateVisibilityFilter} />
        <TodoList todos={todos} toogleFunc={this.handleToggleTodo} />
      </div>
    )
  }
}
