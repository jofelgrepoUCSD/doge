import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLink'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">The Doge</Link>
                <SignedInLinks />
                <SignedOutLinks />
                {/* <a href="/">Home</a>
                <a href="/create">New Dog</a> */}
            </div>
        </nav>
    )
}

export default Navbar
