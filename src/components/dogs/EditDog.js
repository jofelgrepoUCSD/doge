import React from 'react'
import EditForm from './EditForm'
import { Redirect, Link, Route } from 'react-router-dom'

const EditDog = ({props}) => {


    const handleEdit = () => {
        //<EditForm props={props}/>
    }

    return (
        <div>
            <btn className="delete-btn" onClick={handleEdit}>Edits</btn>
            
        </div>
    )
}

export default EditDog
