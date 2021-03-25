import React from 'react'
import { NavLink } from 'react-router-dom'

// We want to show a link that is styled to look like a user is signed in
const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Dog</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>PG</NavLink></li>
        </ul>
    )
}

export default SignedInLinks