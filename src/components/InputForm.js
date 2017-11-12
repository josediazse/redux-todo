import React, { Component } from 'react'

export default class InputForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          size="50"
          placeholder="What Do You Want TODO? Press ENTER"
        />
      </form>
    )
  }
}
