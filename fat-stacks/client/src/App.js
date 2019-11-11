import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { verify } from './redux/auth'
import Header from './components/header'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Login from './components/login'
import Stacks from './components/userpages/stacks'
import Cards from './components/userpages/cards'
import UserHeader from './components/userpages/userheader'

class App extends Component {

  componentDidMount() {
    this.props.verify()
  }
  
  render() {
    const { isAuthenticated } = this.props.user
    return (
      <div>
          <React.Fragment>
            { !isAuthenticated ? <Header success = { this.props.success } /> : <UserHeader />}
            <Switch>
              <Route exact path = '/' component = { Home } default = { true }/>
              <Route path = '/about' component = { About }/>
              <Route path = '/contact' component = { Contact }/>
              <Route path = '/login'  render = { props => isAuthenticated ? <Redirect to = "/stacks" /> : <Login /> } />
              
              <Route path = "/stacks" render = { props =>  
                isAuthenticated ?
                  <Stacks {...props} />
                :
                  <Redirect to = "/login" />
              } />

              <Route path = "/:stackID/cards" render = { props =>  
                isAuthenticated ?
                  <Cards {...props} />
                :
                  <Redirect to = "/login" />
              } />
            </Switch>
          </React.Fragment>
      </div>
    )
  }
}

export default withRouter(connect(state => state, { verify })(App))



