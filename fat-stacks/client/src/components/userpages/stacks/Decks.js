import React, { Component } from 'react'
import './stacks.css'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import {pickStack} from '../../../redux/stacks'
class Decks extends Component {
    render() {
        return (
            <div>
                {
                    this.props.toDelete ?
                    <Link className = "subject-words" to = {`/${this.props.id}/cards/`}>
                        <div className = "deck-grid-container">
                            <button className = "deck-container">
                                <div className = "deck-box">
                                    <p> { this.props.mystacks } </p>
                                </div>
                            </button>
                        </div>
                    </Link>
                    :
                    <div className = "deck-grid-container" key = { this.props.key }>
                        <button onClick = { () => this.props.deleteStack(this.props.id) } 
                                className = "deck-container">
                            <div className = "deck-box">
                                <p> { this.props.mystacks } </p>
                            </div>
                            
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Decks