/*
 This needs to be a class based component
 We want to store in a local state what the user type in the
 Input field

Add a dog with Dogname, breed and age

*/

import React, { Component} from 'react'
import { createProject } from '../../store/actions/projectActions'

// Again this import is so we can connect this component to the redux store
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UploadImage from './UploadImage'
import { v4 as uuidv4 } from 'uuid';
import './../../style.css'


class CreateDog extends Component {

    constructor(props) {
        super(props);
        this.state = {dogname:'',breed:'',age:'',url:'',hobbies:'', nicknames:'',about:'',identifier:uuidv4()};
        this.getDatafromChild = this.getDatafromChild.bind(this); 
    }

    // Update the state of this compmonent to what the user type 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    componentDidUpdate(prevProps,prevState) {
        if(this.state.url !== prevState.url){
            this.props.createProject(this.state)
        }
    }

    getDatafromChild = (val) =>{
        this.setState({url:val})
        this.props.history.push('/')
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='signin' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>

                    <h5 className="addDogHeader">Add a Cute Doge</h5>

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
                        <textarea id="age" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <label htmlFor="hobbies">Hobbies</label>
                        <input type="text" id="hobbies" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="nicknames">Other names</label>
                        <input type="text" id="nicknames" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="about">Write Something about this Doge</label>
                        <input type="text" id="about" onChange={this.handleChange} />
                    </div>

                    {/* <ImageUpload methodfromparent={this.getDatafromChild}/> */}
                    <UploadImage methodfromparent={this.getDatafromChild}/>


                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        // dispatch(createProject(project))
        // refers to the action creator on projectAction
        createProject: (project) => dispatch(createProject(project))
    }
}

// connect -> connects this component to the redux store
export default connect(mapStateToProps, mapDispatchToProp)(CreateDog)

