import React, { Component } from 'react';
import './App.css';
// import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'
import Contact from './contact'
import Projects from './projects'
// const AOS = require('aos')
// AOS.init()

class App extends Component {

//   componentDidMount() {
//     window.addEventListener('load', this.handleLoad);
//  }

//  handleLoad() {
//   $("myclass") //  $ is available here
//  }
  render() {

    return (
      <React.Fragment>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/projects' component = {Projects} />
        </Switch>
      </React.Fragment>

    )
  }
}


export default App;

