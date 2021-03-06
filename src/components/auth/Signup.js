/*
 This needs to be a class based component
 We want to store in a local state what the user type in the
 Input field

Create Signup with First name, last name,
                   Email, and passwowrd

*/

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authAction'

class Signup extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }

    // Update the state of this compmonent to what the user type 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3"> Sign Up</h5>

                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighthen-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}

                        </div>
                    </div>


                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)

