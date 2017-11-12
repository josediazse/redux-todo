import React, { Component } from 'react'

export default class FilterItems extends Component {
  render() {
    return (
      <div>
        <label htmlFor="completed">Completed</label>
        <input id="completed" type="checkbox" />
      </div>
    )
  }
}
