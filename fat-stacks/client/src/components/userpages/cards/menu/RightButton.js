import React, { Component } from 'react'

class RightButton extends Component {
    render() {
        return (
            <div>
                <input className = "right-button toggle-buttons" type = "button" value = ">" onClick = { this.props.toggleRight } />
            </div>
        )
    }
}

export default RightButton