// import { createStore, applyMiddleware } from 'redux'
// import axios from 'axios'
// import thunk from 'redux-thunk'

// const initState = {
//     stacks: [],
//     cards: [],
//     stateOfSubject: [],
//     currentCard: []
// }

// export const getStacks = () => {
//     return dispatch => {
//         axios.get("/stacks")
//         .then(response => {
//             dispatch({
//                 type: "GET_STACKS",
//                 titles: response.data
//             })
//         })
//     }
// }

// export const getFirstCard = card => {
//     return dispatch => {
//         dispatch({
//             type: "GET_FIRST_CARD",
//             currentCard: card
//         })
//     }
// }

// export const makeStack = newStack => {
//     return dispatch => {
//         axios.post("/stacks", newStack)
//         .then(response => {
//             dispatch({
//                 type: "MAKE_STACK",
//                 stacks: response.data
//             })
//         })
//     }
// }

// export const makeCard = newCard => {
//     return dispatch => {
//         axios.post("/cards", newCard)
//         .then(response => {
//             dispatch({
//                 type: "MAKE_CARD",
//                 cards: response.data
//             })
//         })
//     }
// }

// export const pickStack = id => {
//     return dispatch => {
//         dispatch({
//             type: "PICK_STACK",
//             id: id
//         })
//     }
// }

// export const deleteStack = id => {
//     return dispatch => {
//         return axios.delete(`/stacks/${id}`)
//         .then(response => {
//             dispatch({
//                 type: "DELETE_STACK",
//                 stacks: response.data,
//                 id: id
//             })
//         })
//     }
// }

// export const deleteCard = id => {
//     return dispatch => {
//         return axios.delete(`/cards/${id}`)
//         .then(response => {
//             dispatch({
//                 type: "DELETE_CARD",
//                 cards: response.data,
//                 id: id
//             })
//         })
//     }
// }

// export const editCard = id => {
//     return dispatch => {
//         return axios.put(`/cards/${id}`)
//         .then(response => {
//             dispatch({
//                 type: "EDIT_CARD",
//                 currentCard: response.data
//             })
//         })
//     }
// }

// export const getCards = stack => {
//     return dispatch => {
//         axios.get(`/cards/${stack}`)
//         .then(response => {
//             dispatch({
//                 type: "GET_CARDS",
//                 cards: response.data
//             })
//         })
//     }
// }

// const reducer = (prevState = initState, action) => {
//     switch(action.type) {
//         case "GET_STACKS":
//             return {
//                 stacks: action.stacks,
//                 cards: prevState.cards,
//                 stateOfSubject: prevState.stateOfSubject,
//                 currentCard: prevState.currentCard
//             }
//         case "GET_CARDS":
//             return {
//                 stacks: prevState.stacks,
//                 stateOfSubject: prevState.stateOfSubject,
//                 cards: action.cards,
//                 currentCard: prevState.currentCard
//             }
//         case "MAKE_STACK":
//             return {
//                 stacks: [...prevState.stacks, action.stacks],
//                 cards: prevState.cards,
//                 stateOfSubject: prevState.stateOfSubject,
//                 currentCard: prevState.currentCard
//             }
//         case "MAKE_CARD":
//             return {
//                 cards: [...prevState.cards, action.cards],
//                 stacks: prevState.stacks,
//                 stateOfSubject: prevState.stateOfSubject,
//                 currentCard: prevState.currentCard
//         }
//         case "DELETE_STACK":
//             return {
//                 stacks: prevState.stacks.filter(stack => {
//                     stack._id !== action.id
//                 }),
//                 cards: prevState.cards,
//                 stateOfSubject: prevState.stateOfSubject,
//                 currentCard: prevState.currentCard
//             }
//         case "DELETE_CARD":
//             return {
//                 stacks: prevState.stacks,
//                 stateOfSubject: prevState.stateOfSubject,
//                 cards: prevState.cards.filter(card => {
//                     card._id !== action.id
//                 }),
//                 currentCard: prevState.currentCard
//             }
//         case "PICK_STACK":
//             return {
//                 stateOfSubject: action.id,
//                 cards: prevState.cards,
//                 stacks: prevState.stacks,
//                 currentCard: prevState.currentCard
//             }
//         case "EDIT_CARD":
//             return {
//                 stateOfSubject: prevState.stateOfSubject,
//                 cards: [...prevState.cards, action.currentCard],
//                 stacks: prevState.stacks,
//                 currentCard: action.currentCard
//             }
//         default: return prevState
//     }
// }

// export default createStore(reducer, applyMiddleware(thunk))


// When I click on a stack I need it to take me back and set the init state in redux to 
// Whatever cards titles are matching the stateOfSubject._id

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import cards from './cards'
import stacks from './stacks'
import user from './auth'
import reviews from './reviews'

const rootReducer = combineReducers({
    cards,
    stacks,
    user,
    reviews
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSIONS__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)

)