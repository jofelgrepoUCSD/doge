/*
 This needs to be a class based component
 We want to store in a local state what the user type in the
 Input field

Create Signup with First name, last name,
                   Email, and passwowrd

*/

import React, { Component } from 'react'

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
        console.log(this.state)
    }

    render() {
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
                    </div>

                </form>
            </div>
        )
    }
}

export default Signup

