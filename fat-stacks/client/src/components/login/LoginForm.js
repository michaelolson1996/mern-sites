import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/auth'
import AOS from 'aos'
AOS.init()
class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            inputs: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.login(this.state.inputs)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                username: '',
                password: ''
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className = "login-form" data-aos="fade-left" data-aos-delay="40" data-aos-duration="1200" onSubmit = { this.handleSubmit }>
                    <h1 className = "form-title">Log In</h1>
                    <div className = "login-form-inputs-container">
                        <input className = "login-form-inputs" name = "username" type = "text" placeholder = "Username"  value = { this.state.username } onChange = { this.handleChange }></input>
                        <input className = "login-form-inputs" name = "password" type = "password" placeholder = "Password" value = { this.state.password } onChange = { this.handleChange }></input>
                    </div>
                    <input className = "login-form-submit" type = "button" value = "Submit" onClick = { this.handleSubmit }></input>
                    <div className = "login-form-password-container">
                        <p className = "login-form-forgot-password" onClick = { this.props.toggleForms }>Don't have an account?</p>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default connect(null, { login })(LoginForm)

