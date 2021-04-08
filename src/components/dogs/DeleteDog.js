import React, { Component, useState} from 'react'
import { deleteProject } from '../../store/actions/projectActions'

import { useHistory } from "react-router-dom";

// Again this import is so we can connect this component to the redux store
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UploadImage from './UploadImage'
import {render} from 'react-dom'
import {storage} from '../../config/fbConfig';
import './../../style.css'

const DeleteDog = ({props,deleteProject}) => {

    // lets us go back to the homescreen
    let history = useHistory();

    const handleDelete = () => {
        deleteProject(props);
        history.push('/');
    }
    return (
        <div>
            <a href="#" class="delete-btn" onClick={ () => {if(window.confirm('Delete the item?')){handleDelete()};}}>Delete</a> 
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



