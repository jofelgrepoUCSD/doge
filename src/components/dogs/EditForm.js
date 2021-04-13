import React from 'react'
import { useEffect,useState } from "react";
import DogDetail from './DogDetail'
import { useLocation } from "react-router-dom";
import {editProject} from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";
import "firebase/auth";

const EditForm = ({props,editProject}) => {

    
    const location = useLocation();
    const history = useHistory();


    let currUser = firebase.auth().currentUser.uid;
    let projectUser = location.state.authId;


    const [state, setState] = useState({
        dogname: location.state.dogname,
        breed: location.state.breed,
        age: location.state.age,
        url: location.state.url,
        hobbies: location.state.hobbies,
        nicknames: location.state.nicknames,
        about: location.state.about,
    
    });

    const handleEdit = (e) => {

        e.preventDefault()

        // console.log("currUser is:",currUser)
        // console.log(projectUser)
        console.log("changedastate:", state)

        if (currUser === projectUser){
            console.log("valid user")
            editProject(state);
            history.push('/');
        }else {
            alert("Access Denied you don't own this doggo");
        }
    }

    return (
        <div>
            <p>EditForm</p>
            <div className="container">
                <form className="white" onSubmit={handleEdit}>

                    <h5 className="addDogHeader">Edit a Cute Doge</h5>

        
                    <div className="input-field">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" id="breed" onChange={e => {
                            setState({
                                ...state,
                                breed: e.target.value
                            }); 
                          }} />
                    </div>


                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" onChange={e => {
                            setState({
                                ...state,
                                age: e.target.value
                            }); 
                          }} />
                    </div>


                    <div className="input-field">
                        <label htmlFor="hobbies">Hobbies</label>
                        <input type="text" id="hobbies" onChange={e => {
                            setState({
                                ...state,
                                hobbies: e.target.value
                            }); 
                          }} />
                    </div>


                    <div className="input-field">
                        <label htmlFor="nicknames">Nicknames</label>
                        <input type="text" id="nicknames" onChange={e => {
                            setState({
                                ...state,
                                nicknames: e.target.value
                            }); 
                          }} />
                    </div>


                    <div className="input-field">
                        <label htmlFor="about">About</label>
                        <input type="text" id="about" onChange={e => {
                            setState({
                                ...state,
                                about: e.target.value
                            }); 
                          }} />
                    </div>


                    <div className="input-field">
                        <button>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { auth: state.firebase.auth };
  } 

const mapDispatchToProp = (dispatch) => {
    return {
        // dispatch(deleteProject(project))
        // refers to the action creator on projectAction
        editProject: (project) => dispatch(editProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(EditForm)

