import React from 'react'
import { array } from 'prop-types'
import DoneIcon from 'material-ui/svg-icons/action/done'

const StatsElement = ({Icon, value}) => {
  return (
    <span className="statsElement">
      <Icon/> {value}
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
      <StatsElement Icon={DoneIcon} value={done}/>
      <StatsElement Icon={DoneIcon} value={pending}/>
    </div>
  )
}

export default Stats
