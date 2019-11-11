import React, { Component } from 'react'
import DeleteButton from './menu/DeleteButton'
import EditButton from './menu/EditButton'
import NewButton from './NewButton'
import './cards.css'
import $ from 'jquery'

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            toggleCog: true
        }
    }

    toggleCog = () => {
        this.setState(prevState => ({
            toggleCog: !prevState.toggleCog
        }))
        this.state.toggleCog ?
            $("#nav-toggle").click(function(e) {
                $("#rotate").toggleClass('flip')
            })
        :
            $("#nav-toggle").on("click", function(e) {
                $("#rotate").toggleClass('flip-back')
            })

    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <input className = "menu-toggle" id = "nav-toggle" type = "checkbox" />
                <label className = "fas fa-cog flip flip-back" id = "rotate" htmlFor = "nav-toggle" onClick =  { this.toggleCog }>
                </label>
                <div className = "menu-container">
                    <NewButton toggleForm = { this.props.toggleForm } formToggle = { this.props.formToggle } />
                    <EditButton editCard = { this.props.editCard } />
                    <DeleteButton deleteCard = { this.props.deleteCard } cards = { this.props.cards } currentCard = { this.props.currentCard } />
                </div>
            </React.Fragment>
        )
    }
}

export default Menu
