import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import PostsList from './components/PostsList'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'

class App extends Component {
  state = {
    auth: {
      isLoggedIn: false,
      user: ''
    },
    joinLine: {
      code: "",
      error: false,
      lineId: null,
      redirect: false
    },
    line: {
      line: {},
      users: []
    }
  }

  updateAppStateLine = (newLine) => {
    console.log('updateAppStateLine: ', this.state.line)
    this.setState({
      line: {
        line: newLine.line,
        users: newLine.users
      }
    })
  }

  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signUp" component={SignUpLogIn} />
            <Route exact path="/posts" component={PostsList} />
            <Route exact path="/chat" component={ChatPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
