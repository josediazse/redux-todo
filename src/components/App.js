import React, { Component } from 'react'
import InputForm from './InputForm'
import FilterItems from './FilterItems'
import TodoList from './TodoList'
import { array, string } from 'prop-types'
import styles from '../styles.css'

export default class App extends Component {
  state = {
    todos: this.props.todos,
    visibilityFilter: this.props.visibilityFilter
  }

  static propTypes = {
    todos: array,
    visibilityFilter: string
  }
  
  render() {
    return (
      <div style={styles} className="container">
        <InputForm />
        <FilterItems />
        <TodoList todoItems={this.state.todos} />
      </div>
    )
  }
}
