import axios from 'axios'

const stacksAxios = axios.create()
const stacksUrl = '/api/stacks/'

stacksAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const initState = {
    stacks: [],
    stack: {}
}

const setStacks = stacks => {
    return {
        type: "SET_STACKS",
        stacks
    }
}

const oneStack = stack => {
    return {
        type: "ONE_STACK",
        stack
    }
}

export const getStacks = () => {
    return dispatch => {
        stacksAxios.get(stacksUrl).then(res => {
            dispatch(setStacks(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const pickStack = id => {
    return dispatch => {
        stacksAxios.get(stacksUrl + id).then(res => {
            dispatch(oneStack(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addStack = newTitle => {
    return dispatch => {
        stacksAxios.post(stacksUrl, newTitle).then(res => {
            dispatch(getStacks())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteStack = id => {
    return dispatch => {
        stacksAxios.delete(stacksUrl + id).then(res => {
            dispatch(getStacks())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editStack = (id, stack) => {
    console.log(id, stack)
    return dispatch => {
        stacksAxios.put(stacksUrl + id, stack).then(res => {
            dispatch(getStacks())
        }).catch(err => {
            console.log(err)
        })
    }
}

const stacksReducer = (prevState = initState, action) => {
    switch(action.type) {
        case "SET_STACKS":
            return {
                stacks: [...action.stacks],
                stack: {...prevState.stack}
            }
        case "ONE_STACK":
            return {
                stacks: prevState.stacks,
                stack: {...action.stack}
            }
        default:
            return prevState
    }
}

export default stacksReducer