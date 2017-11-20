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
  return (
    <div>
      <StatsElement Icon={DoneIcon} value={done}/>
      <StatsElement Icon={DoneIcon} value={todos-length - done}/>
    </div>
  )
}

export default Stats
