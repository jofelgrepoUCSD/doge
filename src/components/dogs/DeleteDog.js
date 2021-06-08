import React from 'react'
import { deleteProject } from '../../store/actions/projectActions'

import { useHistory } from "react-router-dom";

// Again this import is so we can connect this component to the redux store
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import "firebase/auth";
import './../../style.css'

const DeleteDog = ({props,deleteProject}) => {

    let currUser = firebase.auth().currentUser.uid;
    let projectUser = props.project.authorId;

    // lets us go back to the homescreen
    let history = useHistory();

    const handleDelete = () => {

        // Checks if current user is owner of the dog
        if (currUser === projectUser){
            if(window.confirm('Are you sure you want to Delete this doggo? ')){
                deleteProject(props.project);
                history.push('/');
            }
        }else {
            alert("Access Denied you don't own this doggo");
        }
    }
    return (
        <div>
            <a href="#" className="delete-btn" onClick={handleDelete}>Delete</a> 
            {/* <a href="#" className="delete-btn" onClick={ () => {if(window.confirm('Delete the item?')){handleDelete()};}}>Delete</a>  */}
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
        deleteProject: (project) => dispatch(deleteProject(project))
    }
}

// connect -> connects this component to the redux store
export default connect(mapStateToProps, mapDispatchToProp)(DeleteDog)



