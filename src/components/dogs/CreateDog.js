/*
 This needs to be a class based component
 We want to store in a local state what the user type in the
 Input field

Add a dog with Dogname, breed and age

*/

import React, { Component } from 'react'


class CreateDog extends Component {

    state = {
        dogname: '',
        breed: '',
        age: '',
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
                    <h5 className="grey-text text-darken-3">Add a Doge</h5>

                    <div className="input-field">
                        <label htmlFor="dogname">Dog Name</label>
                        <input type="text" id="dogname" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" id="breed" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="Age">Age</label>
                        <textarea id="age" className="materialize-textarea"></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighthen-1 z-depth-0">Create</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateDog

