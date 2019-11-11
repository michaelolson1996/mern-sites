import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewCardForm from './NewCardForm'
import { addCard, getCards, deleteCard } from '../../../redux/cards'
// import { getStacks } from '../../../redux/stacks'
import './cards.css'
import Menu from './Menu'
import Card from './Card'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTerm: '',
      newDefinition: '',
      formToggle: true,
      toggleCurrentCard: true,
      currentCard: 0,
      currentStack: undefined
    }
  }

  componentDidMount() {
    this.props.getCards(this.props.match.params.stackID)
    this.setState({
      currentStack: this.props.match.params.stackID,
    })
  }

  toggleForm = () => {
    this.setState(prevState => ({
      formToggle: !prevState.formToggle
    }))
  }

  toggleCard = () => {
    this.setState( prevState => ({
        toggleCurrentCard: !prevState.toggleCurrentCard
    }))
  }

  toggleRight = () => {
    if (this.props.cards.cards !== undefined && this.props.cards.cards.length > 0) {
      if (this.state.currentCard < this.props.cards.cards.length - 1) {
        this.setState(prevState => ({
          currentCard: prevState.currentCard += 1,
          toggleCurrentCard: true
        }))
      } else {
        this.setState({
          currentCard: 0,
          toggleCurrentCard: true
        })
      }
    } else {
      console.log('no cards')
    }
}

  toggleLeft = () => {
    if (this.props.cards.cards !== undefined && this.props.cards.cards.length > 0) {
      if (this.state.currentCard === 0) {
        this.setState({
          currentCard: this.props.cards.cards.length - 1,
          toggleCurrentCard: true
        })
      } else {
        this.setState(prevState => ({
          currentCard: prevState.currentCard -= 1,
          toggleCurrentCard: true
        }))
      }
    } else {
      console.log('no cards')
    }
  }

  submitCard = e => {
    e.preventDefault()
    const newCard = {
      cardFront: this.state.newTerm,
      cardBack: this.state.newDefinition,
      title: this.state.currentStack
    }
    this.props.addCard(newCard)
    this.props.getCards(this.state.currentStack)
    this.setState({
      newTerm: '',
      newDefinition: '',
      formToggle: true
    })
  }

  deleteMyCard = id => {
    if (this.props.cards.cards.length > 0 && this.state.currentCard > 0) {
      this.setState(prevState => ({
        currentCard: prevState.currentCard -= 1
      }))
    }
    this.props.deleteCard(id)
  }

  handleTermChange = e => {
    e.preventDefault()
    this.setState({
      newTerm: e.target.value
    })
  }

  handleDefChange = e => {
    e.preventDefault()
    this.setState({
      newDefinition: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className = "home-background">
        <NewCardForm 
          formToggle = { this.state.formToggle } 
          toggleForm = { this.toggleForm }
          handleTermChange = { this.handleTermChange }
          handleDefChange = { this.handleDefChange }
          submitCard = { this.submitCard } 
        />
        
        <Card 
          currentCard = { this.state.currentCard }
          toggleCurrentCard = { this.state.toggleCurrentCard }
          toggleCard = { this.toggleCard }
          // cards = { this.props.cards }
          toggleLeft = { this.toggleLeft } 
          toggleRight = { this.toggleRight }
          currentStack = { this.state.currentStack }
          {...this.props} 
        />

        <Menu
          toggleForm = { this.toggleForm }
          editCard = { this.editCard }
          deleteCard = { this.deleteMyCard }
          currentCard = { this.state.currentCard }
          formToggle = { this.state.formToggle }
          cards = { this.props.cards } 
          {...this.props}
        />
      </div>
    )
  }
}

export default connect(state => state, { addCard, getCards, deleteCard })(Home)