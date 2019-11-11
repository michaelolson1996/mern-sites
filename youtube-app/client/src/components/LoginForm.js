import React, { Component } from 'react'
import '../form.css'

class LoginForm extends Component {
    render() {
        return (
            <div className = "form-container">
                <div className = "form-background" onClick = { this.props.toggleForm }></div>
                    <form>
                        <label>Username<input className = "inputs-login" type = "text" minLength = '7' maxLength = '15' autoFocus /></label>
                        <label>Password<input className = "inputs-login" type = "password" /></label>
                        <input className = "loginform-button" type = "button" value = "submit" />
                    </form>
            </div>
        )
    }

}

export default LoginForm