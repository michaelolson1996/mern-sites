import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './header.css'

const Header = () => {
    return (
        <div>
            {
                <div className = "header">
                    <Link className = "logo" to = '/'>Flash Stacks</Link>
                    <div className = "empty-space-header"></div>
                    <input className = "nav-toggle" type = "checkbox" id = "nav-toggle" />
                    <label className = "nav-toggle-label" htmlFor = "nav-toggle">
                        <span></span>
                    </label>
                    <Navbar />
                </div>
            }
        </div>
    )
}

export default Header