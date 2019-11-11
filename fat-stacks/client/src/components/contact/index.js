import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className = "contact-page-wrap">
            <div className = "title-contact-container">
                <h1 className = "title-contact">Contact Us!</h1>
            </div>
            <div className = "my-contact-container">
                <div className = "my-form-container">
                    <form className = "my-form">
                        <div className = "form-title-contact-container">
                            <h4 className = "form-title-contact">Don't be shy, we don't bite hard</h4>
                            <input className = "contact-form-inputs contact-name-input" type = "text" placeholder = "Full Name" />
                            <input className = "contact-form-inputs contact-email-input" type = "email" placeholder = "Email" />
                            <input className = "contact-form-inputs contact-subject-input" type = "text" placeholder = "Subject" />
                            <textarea className = "contact-assistance-input" type = "text" placeholder = "How may we assist you?" />
                            <div className = "form-button-contact-container">
                                <input type = "button" className = "contact-form-button" value = "Send" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className = "contact-right-container">
                    <div className = "my-image"></div>
                    <div className = "contact-location-container">
                        <h5 className = "location-title contact-info">Location</h5>
                        <p className = "contact-adress contact-info">150 State St, Salt Lake City, UT 84111</p>
                        <p className = "contact-phone contact-info">(424) 400-1949</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact