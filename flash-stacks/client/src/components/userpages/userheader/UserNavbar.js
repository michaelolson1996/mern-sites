import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './userheader.css'
class UserNavbar extends Component {

    handlelogout = async event => {
        // event.preventDefault()
        this.props.logout()
        this.props.history.push("/")
        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                <div className = "navbar-container">
                    <ul className = "navbar-ul">
                        <li className = "navbar-li"><Link className = "links" to = "/stacks">Stacks</Link></li>
                        
                    </ul>
                </div>
                <button className = "button-logout" onClick = { this.handlelogout }>Log Out</button>
            </React.Fragment>
        )
    }
}
export default withRouter(UserNavbar)
