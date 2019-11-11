import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { deleteCard } from '../../../../redux/cards'

class DeleteButton extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.cards.cards !== undefined ?
                        this.props.cards.cards.length > 0 ?
                            <i className = "fas fa-trash-alt tooltip" onClick = { () => this.props.deleteCard(this.props.cards.cards[this.props.currentCard]._id) }>
                                <span className = "tooltip-text">Delete</span>
                            </i>
                        :
                            <i className = "fas fa-trash-alt tooltip">
                                <span className = "tooltip-text">Nothing to Delete</span>
                            </i>
                    :
                        <i className = "fas fa-trash-alt tooltip">
                            <span className = "tooltip-text">Nothing to Delete</span>
                        </i>

                }
            </React.Fragment>
        )
    }
}

export default DeleteButton