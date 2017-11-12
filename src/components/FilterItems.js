import React, { Component } from 'react'

export default class FilterItems extends Component {
  render() {
    return (
      <div>
        <label htmlFor="all">All</label>
        <input id="all" type="checkbox" />
        
        <label htmlFor="done">Done</label>
        <input id="done" type="checkbox" />

        <label htmlFor="pending">Pending</label>
        <input id="pending" type="checkbox" />
      </div>
    )
  }
}
