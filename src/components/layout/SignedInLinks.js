import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

// We want to show a link that is styled to look like a user is signed in
const SignedInLinks = (props) => {
    return (
        < ul className="right" >
            <li><NavLink to='/create'>Add a Dog</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1 '>
                {props.profile.initials}
            </NavLink></li>
        </ul >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)