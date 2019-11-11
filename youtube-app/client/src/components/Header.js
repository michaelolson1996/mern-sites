import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div className = "header-container">
                <div className = "logo-container">
                    <h1 className = "logo">Video Player</h1>
                </div>
                <ul className = "header-nav-container">
                    <Link className = "head-links head-list-items" to = '/'><li>Home</li></Link>
                    <Link className = "head-links head-list-items" to = '/videos'><li>Videos</li></Link>
                    <li className = 'head-list-items'><button onClick = { this.props.toggleForm } className = "login-button">Log In</button></li>
                </ul>
            </div>
        )
    }

}

export default Header