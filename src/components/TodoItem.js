import React from 'react'
import { string, func } from 'prop-types'

TodoItem.propTypes = {
  text: string.isRequired,
  toggleFunc: func.isRequired
}

function TodoItem({ toggleFunc, text }) {
  return <li onClick={toggleFunc}>{text}</li>
}

export default TodoItem
