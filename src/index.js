import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

let initialState = {
  todos: [
    {
      completed: false,
      id: 0,
      text: 'Hey'
    },
    {
      completed: false,
      id: 1,
      text: 'You'
    }
  ],
  visibilityFilter: 'SHOW_ACTIVE'
}

ReactDOM.render(
  <App {...initialState} />,
  document.getElementById('root')
)
