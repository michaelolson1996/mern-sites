import React, { Component } from 'react'

class NewCardForm extends Component {
    render() {
        return (
            <div>
                {
                    !this.props.formToggle ?
                    <div className = "form-background-container">
                    <div className = "form-background-home" onClick = { this.props.toggleForm }></div>
                    <form className = "new-card-form" onSubmit = { this.props.submitCard }>
                        {/* <input className = "term-input new-form-inputs" type = "text" placeholder = "Enter A Term" onChange = { this.props.handleTermChange } />
                        <input className = "phrase-input new-form-inputs" type = "text" placeholder = "Enter A Phrase" onChange = { this.props.handleDefChange } /> */}
                        <label value = "card">
                            <textarea className = "card-front-input" onChange = { this.props.handleTermChange } required autoFocus maxLength = "100"></textarea>
                        </label>
                        <textarea className = "card-back-input" onChange = { this.props.handleDefChange } required maxLength = "500"></textarea>
                        <input className = "form-buttons" type = "button" value = "Submit" onClick = { this.props.submitCard } />
                        <input className = "form-buttons" type = "button" value = "Exit" onClick = { this.props.toggleForm } />
                    </form>
                    </div>
                    :
                    <div></div>
                }
            </div>
        )
    }
}

export default NewCardForm