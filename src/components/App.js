import React, { Component } from 'react'
import InputForm from './InputForm'
import FilterItems from './FilterItems'
import TodoList from './TodoList'
import { object } from 'prop-types'
import styles from '../styles.css'

export default class App extends Component {
  state = {
    todos: this.props.initialState.todos,
    visibilityFilter: this.props.initialState.visibilityFilter
  }

  static propTypes = {
    initialState: object.isRequired
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
