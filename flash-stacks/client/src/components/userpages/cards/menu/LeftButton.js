import React, { Component } from 'react'

class LeftButton extends Component {
    render() {
        return (
            <div>
                <input className = "left-button toggle-buttons" type = "button" value = "<" onClick = { this.props.toggleLeft } />
            </div>
        )
    }
}

export default LeftButton