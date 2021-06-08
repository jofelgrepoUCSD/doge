/*
 This needs to be a class based component
 We want to store in a local state what the user type in the
 Input field

                    < SUMMARY OF THIS COMPONENT >
1. When filling up the form, states info gets updated on handleChange (setState)
2. We have a seperate UploadImage component, logic about uploading is handled there
3. We want to pass data from child to parent since we want url:val AKA url:(childData)
4. To avoid creating project with empty url state we use componentDidUpdate
5. This only fires createProject when states are all Complete
6. on mapDispatchToProp, createProject is dispatched this refers to projectActions(createProject)
7. In projectActions(createProject) is tasked to do backend work to create the dog (firebase stuff)
8. Then depending if its successful or not, it goes to projectReducer and handles it.

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
    /* IMPORTANT IN REACT
       only fires create project when there are changes on the url state
       we do this because url state is being change on Upload Image
    */
    componentDidUpdate(prevProps,prevState) {
        if(this.state.url !== prevState.url){
            this.props.createProject(this.state)
        }
    }

    /*  This is how we collect data from child to parent
        val will be filled in with the url in the child state (UploadImage)
    */
    getDatafromChild = (val) =>{
        this.setState({url:val})
        this.props.history.push('/')
    }

    // submit button needs e.preventDefault so avoid loading the page.
    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='signin' />
        return (

                
            <div className="container">
                <form className="edit-form" onSubmit={this.handleSubmit}>

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
        /* dispatch(createProject(project))
         refers to the action creator on projectActions
        */
        createProject: (project) => dispatch(createProject(project))
    }
}

// connect -> connects this component to the redux store
export default connect(mapStateToProps, mapDispatchToProp)(CreateDog)

