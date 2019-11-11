import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const science = 'https://www.ixl.com/science/'
const math = 'https://www.ixl.com/math/'
const learn = 'http://www.basicknowledge101.com/subjects/learningstyles.html'
const colors = 'https://www.kaplanco.com/ii/using-color-to-enhance-learning'
const study = 'https://psychcentral.com/lib/top-10-most-effective-study-habits/'
let currentYear = new Date()


class Footer extends Component {
    render() {
        return (
            <div className = "page-4-wrap">
                            <div className = "page-4-grid">
                                <div className = "footer-columns-container">
                                    <div className = "footer-menu footer-left-menu">
                                        <div className = "footer-left footer-menu-container">
                                            <h4 className = "footer-title">Flash Stacks</h4>
                                            <Link className = "footer-item footer-about" to = "/about">
                                                <div>
                                                    <p className = "footer-text">About</p>
                                                </div>
                                            </Link>
                                            <Link className = "footer-item footer-stats" to = "/stats">
                                                <p className = "footer-text">Stats</p>
                                            </Link>
                                            <Link className = "footer-item footer-contact" to = "/contact">
                                                <p className = "footer-text">Contact Us</p>
                                            </Link>
                                            <Link className = "footer-item footer-location" to = "/location">
                                                Location
                                            </Link>
                                            <Link to = '/about' className = "footer-item footer-instructions">
                                                <p className = "footer-text">How it Works</p>
                                            </Link>
                                            <Link to = '/about' className = "footer-item footer-reviews">
                                                <p className = "footer-text">Reviews</p>
                                            </Link>
                                            <Link to = '/login' className = "footer-item footer-signup">
                                                <p className = "footer-text">Sign Up</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className = "footer-menu footer-right-menu">
                                        <div className = "footer-right footer-menu-container">
                                            <h4 className = "footer-title">Resources</h4>
                                            <div onClick = { () => window.open(science, "_blank") }>
                                                <p className = "footer-item footer-science">Science</p>
                                            </div>
                                            <div onClick = { () => window.open(math, "_blank") }>
                                                <p className = "footer-item footer-math">Math</p>
                                            </div>
                                            <div>
                                                <p className = "footer-item footer-colors" onClick = { () => window.open(colors, "_blank") }>Colors</p>
                                            </div>
                                            <div>
                                                <p className = "footer-item footer-learn" onClick = { () => window.open(learn, "_blank") }>Learning Methods</p>
                                            </div>
                                            <div>
                                                <p className = "footer-item footer-study" onClick = { () => window.open(study, "_blank") }>Study Habits</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "footer-menu footer-info-menu">
                                        <div className = "footer-info footer-menu-container">
                                            <h4 className = "footer-title">Additional Information</h4>
                                            <div>
                                                <p className = "footer-item footer-learn">Privacy Policy</p>
                                            </div>
                                            <div>
                                                <p className = "footer-item footer-learn">Site Map</p>
                                            </div>
                                            <div>
                                                <p className = "footer-item footer-learn">Terms of Use</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "footer-mid-column">
                                    <div className = "footer-mid-inner-container">
                                        <div className = "footer-about-michael-container">
                                            <div className = "michael-image"></div>
                                            <div className = "about-michael-text">
                                                <p className = "footer-about-michael">Michael Olson</p>
                                                <p className = "footer-about-michael-title">President</p> 
                                            </div>
                                        </div>
                                        <div className = "our-mission-container">
                                            <div className = "our-mission-inner-container">
                                                <p>
                                                    <span className = "our-mission-title">Our Mission: </span>  
                                                    <span className = "our-mission-text">"To create a website that will be beneficial to its users as well as inspire people to learn as much as they can, or want to. Creating a free and simple way to make learning seem less like a chore. Have fun with the flashiest of all stacks!"
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className = "subscription-container">
                                            <h3 className = "subscription-title">Subscribe for our Newsletter Today!</h3>
                                            <div className = "subscription-inner-container">
                                                <input className = "subscription-input" type = "text" placeholder = "Enter your email" name = "email" />
                                                <input className = "subscription-button" type = "button" value = "Subscribe" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "footer-copyright-container">
                                        <p className = "footer-copyright">Copyright &copy; { currentYear.getFullYear() } FlashStacks</p>
                                    </div>
                                </div>
                                <div className = "footer-icons-container">
                                    <div className = "footer-icons-inner-container">
                                        <i className = "fab fa-facebook-square"></i>
                                        <i className = "fab fa-linkedin"></i>
                                        <i className = "fab fa-github-square"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default Footer