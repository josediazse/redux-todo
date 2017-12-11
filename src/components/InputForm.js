import React, { Component } from 'react'
import { func } from 'prop-types'

export default class InputForm extends Component {
  state = {
    todoText: ''
  }

  static propTypes = {
    handleInput: func.isRequired
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    })
  }

  handleInput = e => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        this.setState({
          todoText: ''
        })
        this.props.handleInput(e.target.value)
      }
      e.preventDefault()
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          size="50"
          onChange={this.handleChange}
          onKeyPress={this.handleInput}
          placeholder="What Do You Want TODO? Press ENTER"
          value={this.state.todoText}
        />
      </form>
    )
  }
}
