import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/App'
import MyReduxApp from './redux101'

MyReduxApp()

const MyApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'))
