import React, { Component } from 'react'

class NewButton extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <input className = "new-card-button buttons" type = "button" value = "new card" onClick = { this.props.toggleForm } /> */}
                <i className = "far fa-plus-square tooltip" onClick = { this.props.toggleForm }>
                    <span className = "tooltip-text">New</span>
                </i>
            </React.Fragment>
        )
    }
}

export default NewButton