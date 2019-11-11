import axios from 'axios'

const authAxios = axios.create()

authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

let initialState = {
    user: {
        username: '',
        isAdmin: false,
        _id: ''
    },
    authErrCode: {
        signup: '',
        login: ''
    },
    isAuthenticated: false
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user,
    }
}

export function verify() {
    return dispatch => {
        authAxios.get('/api/profile')
        .then(res => {
            const { user } = res.data
            dispatch(authenticate(user))
        }).catch(err => {
            handleAuthErr("verify", err.status)
        })
    }
}

export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOGOUT"
    }
}

export function signUp(inputs) {
    return dispatch => {
        axios.post('/auth/signup', inputs)
        .then(response => {
            const { token, user, success } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(logon(success, user))
        }).catch(err => {
            console.log(err)
            dispatch(handleAuthErr("signup", err.response.status))
        })
    }
}

const logon = (success, user) => {
    return {
        type: "LOGON",
        success,
        user
    }
}

const handleAuthErr = (key, errCode) => {
    return {
        type: "HANDLE_AUTH_ERR",
        key,
        errCode
    }
}

export function login(inputs) {
    return dispatch => {
        axios.post("/auth/login", inputs)
        .then(response => {
            const { token, user, success } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(logon(success, user))
        })
        .catch((err) => {
            console.log(err)
            dispatch(handleAuthErr("signin", err.response.status))
        })
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success
            }
        case "LOGOUT":
            return {
                ...state
            }
        case "HANDLE_AUTH_ERR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                }
            }
        case "LOGON":
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                authErrCode: {
                    signup: '',
                    login: ''
                }
            }
        default:
            return state
    }
}

export default authReducer