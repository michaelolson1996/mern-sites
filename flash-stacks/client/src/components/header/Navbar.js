import React from 'react'
import { Link } from 'react-router-dom'
// import './header.css'

const Navbar = () => {
    return (
        <React.Fragment>
            <div className = "navbar-container">
                <ul className = "navbar-ul">
                    <li className = "navbar-li"><Link className = "links" to = "/">Home</Link></li>
                    <li className = "navbar-li"><Link className = "links" to = "/about">About</Link></li>
                    <li className = "navbar-li"><Link className = "links" to = "/contact">Contact</Link></li>
                </ul>
            </div>
            <Link to = "/login"><button className = "button-login">Log In</button></Link>
        </React.Fragment>
    )
}

export default Navbar