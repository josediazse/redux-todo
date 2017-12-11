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
    const id = this.getNextTodoId()
    this.dispatch({
      type: 'ADD_TODO',
      id: id,
      text: text
    })
  }

  dispatch = action => {
    this.props.store.dispatch(action)
  }

  handleToggleTodo = todo => {
    this.dispatch({
      type: 'TOGGLE_TODO',
      id: todo.id
    })
  }

  updateVisibilityFilter = filter => {
    this.dispatch({
      type:'SET_VISIBILITY_FILTER',
      filter: filter.target.value
    })
  }

  applyVisibilityFilter = () => {
    const { visibilityFilter, todos } = this.props
    if (visibilityFilter === 'SHOW_ALL') return todos
    else if (visibilityFilter === 'DONE')
      return todos.filter(t => t.completed === true)
    else if (visibilityFilter === 'PENDING')
      return todos.filter(t => t.completed === false)
  }

  getNextTodoId = () => {
    const { todos } = this.props
    if (todos.length === 0) return 0
    else return todos.map(t => t.id).reduce((a, b) => Math.max(a, b)) + 1
  }

  render() {
    const todos = this.applyVisibilityFilter()
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
