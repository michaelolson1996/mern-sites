import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editCard } from '../../../../redux/cards'

class EditButton extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <input className = "buttons" type = "button" value = "edit card" onClick = { this.props.editCard } /> */}
                <i className = "fas fa-pen-fancy tooltip">
                    <span className = "tooltip-text">Edit</span>
                </i>
            </React.Fragment>
        )
    }
}

export default connect(state => state, { editCard })(EditButton)