import React, { Component } from 'react'
import RightButton from './menu/RightButton'
import LeftButton from './menu/LeftButton'

class Card extends Component {
    constructor() {
        super()
        this.state = {
            currentCard: undefined
        }
    }


    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className = "card-and-buttons">
                <LeftButton toggleLeft = { this.props.toggleLeft } />
                <div className = "card" onClick = { () => this.props.toggleCard() }>
                    <div className = "subject-title-container">
                        <h1 className = "subject-title" >{ this.props.stacks.stack.stack }</h1>
                    </div>
                    <div  className = "card-text-container">
                        {
                            this.props.cards.cards === undefined ?
                                null
                            :
                                this.props.cards.cards.length <= 0 ?
                                    null
                                :
                                    this.props.currentCard === undefined ?
                                        null
                                    :
                                        this.props.toggleCurrentCard ?
                                            <h1 className = "front-word-container">
                                                {this.props.cards.cards[this.props.currentCard].cardFront}
                                            </h1>
                                        :
                                            <p className = "back-word-container">
                                                {this.props.cards.cards[this.props.currentCard].cardBack}
                                            </p>
                        }
                    </div>
                </div> 
                <RightButton toggleRight = { this.props.toggleRight }/>
            </div>
        )
    }
}

export default Card