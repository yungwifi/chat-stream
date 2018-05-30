import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import PostsList from "./components/PostsList"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/signUp" component={SignUpLogIn} />
            <Route exact path="/posts" component={PostsList} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
