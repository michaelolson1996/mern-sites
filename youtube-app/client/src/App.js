import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Videos from './components/Videos'
import Login from './components/Login'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      formView: false
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({
      formView: !prevState.formView
    }))
  }

  
  render() {
    return (
      <div className="app-wrap">
        {
          this.state.formView ?
          <LoginForm toggleForm = { this.toggleForm } />
          :
          <div></div>
        }
        <Header toggleForm = { this.toggleForm } />
        <Switch>
          <Route exact path = '/' render = { () => <Home toggleForm = { this.toggleForm } /> } />
          <Route path = '/videos' component = { Videos } />
          <Route path = '/login' component = { Login } />
        </Switch>
      </div>
    )
  }
}

export default App;
