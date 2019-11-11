import React, { Component } from 'react'
import Decks from './Decks'
import StackForm from './StackForm'
import { connect } from 'react-redux'
import { getStacks, pickStack, addStack, deleteStack } from '../../../redux/stacks'
// import { getCards } from '../../../redux/cards'
import './stacks.css'

class Stacks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setToggle: true,
            newTitle: '',
            toDelete: true
        }
    }
    
    componentDidMount() {
        this.props.getStacks()
    }

    toggleForm = () => {
        this.setState(prevState => ({
            setToggle: !prevState.setToggle
        }))
    }

    clickDelete = () => {
        this.setState({
            toDelete: false
        })
    }

    deleteStack = (id) => {
        this.props.deleteStack(id)
        this.setState({
            toDelete: true
        })
    }

    submitStack = e => {
        e.preventDefault()
        const newTitle = {
            stack: this.state.newTitle,
            user: this.props.user.user._id
        }
        this.props.addStack(newTitle)
        this.setState({
            newTitle: '',
            setToggle: true
        })
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({
            newTitle: e.target.value
        })
    }

    render() {
        let filteredStacks = this.props.stacks.stacks
        console.log(this.state)

        return (
            <div className = "page-container">
                <div className = "stack-buttons-container">
                    <input className = "stack-make-button" type = "button" value = "Make a Stack" onClick = { this.toggleForm } />
                    <input className = "stack-delete-button" type = "button" value = "Delete a Stack" onClick = { this.clickDelete } />
                </div>
                {
                    this.state.setToggle ?
                    <div></div>
                    :
                    <StackForm handleChange = { this.handleChange } 
                               toggleForm = { this.toggleForm } 
                               submitStack = { this.submitStack } />
                }
                <div className = "stacks-page-container">
                    {
                        filteredStacks.map(stack => {
                            return <Decks 
                                        key = { stack._id }
                                        id = { stack._id } 
                                        mystacks = { stack.stack } 
                                        deleteStack = { this.deleteStack }
                                        pickStack = { this.props.pickStack }
                                        toDelete = { this.state.toDelete }
                                    />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getStacks, pickStack, addStack, deleteStack })(Stacks)