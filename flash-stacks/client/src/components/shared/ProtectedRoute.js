import React from 'react'
import { Redirect } from 'react-router-dom'
import { Stacks } from '../userpages/stacks'

const ProtectedRoute = props => {
    const {isAuthenticated, path} = props
    return (
        isAuthenticated 
        ? <Redirect to = '/stacks' component = { Stacks } />
        : <Redirect path = '/' />
    )
}

export default ProtectedRoute