import React from 'react'
import { array } from 'prop-types'
import DoneIcon from 'material-ui/svg-icons/action/assignment-turned-in'
import PendingIcon from 'material-ui/svg-icons/action/assignment'

const StatsElement = ({Icon, value, text}) => {
  return (
    <span className="statsElement">
      <Icon/> {text} {value}
    </span>
  )
}

Stats.propTypes = {
  todos: array.isRequired
}

function Stats({ todos }) {
  const done = todos.filter(t => t.completed === true).length
  const pending = todos.filter(t => t.completed === false).length
  return (
    <div className="stats">
      <StatsElement Icon={DoneIcon} value={done} text='Done'/>
      <StatsElement Icon={PendingIcon} value={pending} text='Pending'/>
    </div>
  )
}

export default Stats
