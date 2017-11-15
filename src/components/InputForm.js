import React, { Component } from 'react'

export default class InputForm extends Component {
  state = {
    todoText: ''
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    })
  }

  handleInput = e => {
    if (e.key === 'Enter'){
      this.setState({
        todoText: ''
      })
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
