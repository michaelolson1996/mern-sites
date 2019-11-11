import React, { Component } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            newUser: false
        }
    }
    
    toggleForms = () => {
        this.setState(prevState => ({
            newUser: !prevState.newUser
        }))
    }

    render() {
        return (
            <div className = "login-form-wrap">
                {
                    !this.state.newUser ?
                    <LoginForm toggleForms = { this.toggleForms } />
                    :
                    <SignupForm toggleForms = { this.toggleForms } />
                }
            </div>
        )
    }
}

export default Login