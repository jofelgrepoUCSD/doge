import React from 'react'
import { NavLink } from 'react-router-dom'

// We want to show a link that is styled to look like a user is signed out
const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Sign up</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks