import React, { Component } from 'react'

class StackForm extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className = "outer-shell">
                        <form className = "form-make-stack" onSubmit = { this.props.submitStack } >

                            <input type = "text" 
                                placeholder = "Name Your Stack" 
                                onChange = { this.props.handleChange }
                                 />

                            <input type = "button" 
                                value = "exit" 
                                onClick = { this.props.toggleForm }
                                 />

                            <input type = "button" 
                                value = "Submit"
                                onClick = { this.props.submitStack }
                                 />

                        </form>
                    </div>
                    <div className = "background-cover" onClick = { this.props.toggleForm }></div>
                </React.Fragment>
            </div>
        )
    }
}

export default StackForm