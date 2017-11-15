import React from 'react'
import { array } from 'prop-types'

Stats.propTypes = {
  todos: array.isRequired
}

function Stats({ todos }) {
  const done = todos.length
  const pending = todos.filter(t => t.completed === false).length
  return <div>{`Done: ${done}  Pending: ${pending}`}</div>
}

export default Stats
