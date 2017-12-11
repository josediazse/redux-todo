import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/App'
import { createStore, combineReducers } from 'redux'

const MyApp = () => (
  <MuiThemeProvider>
    <App store={store} {...store.getState()} />
  </MuiThemeProvider>
)

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    todos,
    visibilityFilter
  })
)

const render = () => {
  ReactDOM.render(<MyApp />, document.getElementById('root'))
}

store.subscribe(render)
render()
