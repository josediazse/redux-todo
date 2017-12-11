import React, { Component } from 'react'
import InputForm from './InputForm'
import FilterItems from './FilterItems'
import TodoList from './TodoList'
import Stats from './Stats'
import { array, string, object } from 'prop-types'
import styles from '../styles.css'

export default class App extends Component {
  static propTypes = {
    todos: array.isRequired,
    visibilityFilter: string.isRequired,
    store: object.isRequired
  }

  handleInput = text => {
    this.dispatch({
      type: 'ADD_TODO',
      id: this.getNextTodoId(),
      text: text
    })
  }

  handleToggleTodo = todo => {
    this.dispatch({
      type: 'TOGGLE_TODO',
      id: todo.id
    })
  }

  updateVisibilityFilter = filter => {
    this.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter.target.value
    })
  }

  dispatch = action => {
    this.props.store.dispatch(action)
  }

  applyVisibilityFilter = ({visibilityFilter, todos}) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'DONE':
        return todos.filter(t => t.completed === true)
      case 'PENDING':
        return todos.filter(t => t.completed === false)
    }
  }

  getNextTodoId = () => {
    const { todos } = this.props
    if (todos.length === 0) return 0
    else return todos.map(t => t.id).reduce((a, b) => Math.max(a, b)) + 1
  }

  render() {
    const todos = this.applyVisibilityFilter(this.props)
    return (
      <div style={styles} className="container">
        <Stats todos={this.props.todos} />
        <InputForm handleInput={this.handleInput} />
        <FilterItems handleChange={this.updateVisibilityFilter} />
        <TodoList todos={todos} toogleFunc={this.handleToggleTodo} />
      </div>
    )
  }
}
