import React, { Component } from 'react'
import { string, func } from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    text: string.isRequired,
    toggleFunc: func.isRequired
  }

  render() {
    return <li onClick={this.props.toggleFunc}>{this.props.text}</li>
  }
}
