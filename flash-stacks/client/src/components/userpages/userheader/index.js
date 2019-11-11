import React, { Component } from 'react'
import '../../header/header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UserNavbar from './UserNavbar'
import { logout } from '../../../redux/auth'

class UserHeader extends Component {
    render() {
        return (
            <div className = "header">
            <Link className = "logo" to = '/stacks'>Flash Stacks</Link>
            <div className = "empty-space-header"></div>
            <UserNavbar logout = { this.props.logout } />
            </div>
        )
    }
}

export default connect(null, { logout })(UserHeader)