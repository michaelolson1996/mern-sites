import axios from 'axios'
const cardsAxios = axios.create()

const cardsUrl = "/api/cards/"

cardsAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const setCards = cards => {
    return {
        type: "SET_CARDS",
        cards
    }
}

export const getCards = id => {
    return dispatch => {
        cardsAxios.get(cardsUrl + id).then(res => {
            dispatch(setCards(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addCard = newCard => {
    return dispatch => {
        cardsAxios.post(cardsUrl, newCard).then(res => {
            dispatch(getCards(newCard.title))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteCard = id => {
    return dispatch => {
        cardsAxios.delete(cardsUrl + id).then(res => {
            dispatch(getCards(res.data.title))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editCard = (id, card) => {
    return dispatch => {
        cardsAxios.put(cardsUrl + id, card).then(res => {
            dispatch(getCards())
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialCards = []

const cardsReducer = (cards = initialCards, action) => {
    switch(action.type) {
        case "SET_CARDS":
            return {
                cards: [...action.cards]
            }
        default:
            return cards
    }
}

export default cardsReducer