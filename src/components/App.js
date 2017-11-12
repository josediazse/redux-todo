import React, { Component } from 'react'
import InputForm from './InputForm'
import FilterItems from './FilterItems'
import TodoList from './TodoList'

import styles from '../styles.css'

export default class App extends Component {
  render() {
    return (
      <div style={styles} className="container">
        <InputForm />
        <FilterItems />
        <TodoList />
      </div>
    )
  }
}
