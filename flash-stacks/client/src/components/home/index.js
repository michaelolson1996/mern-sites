import React, { Component } from 'react'
import Footer from '../footer'
import {Link} from 'react-router-dom'
import './home.css'
const science = 'https://www.ixl.com/science/'
const math = 'https://www.ixl.com/math/'
const learn = 'http://www.basicknowledge101.com/subjects/learningstyles.html'
const colors = 'https://www.kaplanco.com/ii/using-color-to-enhance-learning'
const study = 'https://psychcentral.com/lib/top-10-most-effective-study-habits/'


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "about-wrap" id = "fullpage">
                    <div className = "page-1-about">
                            <div className = "flash-stacks-title-container">
                                <h1 className = "flash-stacks-title">Flash Stacks</h1>
                                <h3 className = "flash-stacks-quote">Bringing Simplicity to the Art of Learning</h3>
                            </div>
                    </div>
                    <div className = "page-2-wrap">
                            <div className = "page-2-why-container">
                                <h1 className = "why-flash-stacks-title">What Is Flash Stacks?</h1>
                                <hr className = "line-page-2"/>
                                <p className = "why-flash-stacks-answer">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                    </div>
                    <div className = "page-3-wrap">
                        <div className = "page-3-grid-container">
                            <div className = "page-3-grid-1 grid-boxes" onClick = { () => window.open(science, "_blank") }>
                                <div className = "middle">
                                    <p className = "middle-text">Science</p>
                                </div>
                            </div>
                            <div className = "page-3-grid-2 grid-boxes">
                                <div className = "middle">
                                    <p className = "middle-text">Stats</p>
                                </div>
                            </div>
                            <div className = "page-3-grid-3 grid-boxes" onClick = { () => window.open(colors, "_blank") }>
                                <div className = "middle">
                                    <p className = "middle-text">Science of Colors</p>
                                </div>
                            </div>
                            <div className = "page-3-grid-4 grid-boxes" onClick = { () => window.open(learn, "_blank") }>
                                <div className = "middle">
                                    <p className = "middle-text">Learning Methods</p>
                                </div>
                            </div>
                            <div className = "page-3-grid-5 grid-boxes" onClick = { () => window.open(math, "_blank") }>
                                <div className = "middle">
                                    <p className = "middle-text">Importance of Math</p>
                                </div>
                            </div>
                            <Link to = '/about' className = "page-3-grid-6 grid-boxes">
                                <p className = "about-flashstacks-text">Flash Stacks</p>
                                <div className = "middle">
                                    <p className = "middle-text">About</p>
                                </div>
                            </Link>
                            <Link to = '/contact' className = "page-3-grid-7 grid-boxes">
                                <div className = "middle">
                                    <p className = "middle-text">Contact Us</p>
                                </div>
                            </Link>
                            <div className = "page-3-grid-8 grid-boxes">
                                <div className = "middle">
                                    <p className = "middle-text">Reviews</p>
                                </div>
                            </div>
                            <div className = "page-3-grid-9 grid-boxes" onClick = { () => window.open(study, "_blank") }>
                                <div className = "middle">
                                    <p className = "middle-text">Study Habits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />    
                </div>
            </React.Fragment>
        )
    }
}

export default Home