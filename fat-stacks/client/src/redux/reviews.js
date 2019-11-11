import axios from 'axios'
const reviewsAxios = axios.create()

const reviewsUrl = ('/reviews')

const fetchReviews = reviews => {
    return {
        type: "FETCH_REVIEWS",
        reviews
    }
}

export const getReviews = () => {
    return dispatch => {
        return reviewsAxios.get(reviewsUrl)
        .then(response => {
            dispatch(fetchReviews(response.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const postReview = newReview => {
    return dispatch => {
        return reviewsAxios.post(reviewsUrl, newReview).then(res => {
            dispatch(fetchReviews())
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialReviews = []

const reviewsReducer = (reviews = initialReviews, action) => {
    switch(action.type) {
        case "FETCH_REVIEWS":
            return [...action.reviews]
        default:
            return reviews
    }
}

export default reviewsReducer