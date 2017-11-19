import React, { Component } from 'react'
import { func } from 'prop-types'

export default class FilterItems extends Component {
  static propTypes = {
    handleChange: func.isRequired
  }

  render() {
    return (
      <div>
        <label htmlFor="all">All</label>
        <input
          id="all"
          value="ALL"
          name="visibilityFilterButton"
          onClick={this.props.handleChange}
          type="radio"
        />

        <label htmlFor="done">Done</label>
        <input
          id="done"
          value="DONE"
          name="visibilityFilterButton"
          onClick={this.props.handleChange}
          type="radio"
        />

        <label htmlFor="pending">Pending</label>
        <input
          id="pending"
          value="PENDING"
          name="visibilityFilterButton"
          onClick={this.props.handleChange}
          type="radio"
        />
      </div>
    )
  }
}
