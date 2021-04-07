import React from 'react'
import moment from 'moment'
import '../../../src/style.css'

// Going to be placed on DogList so that we simply need to change 
// a single Summary here and use it multiple times on DogList
const DogListSumary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><strong>{project.dogname}</strong></span>
                <p> Posted by {project.authorFirstName} {project.authorLastName} </p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                <img src={project.url} className="dogListPhoto"alt="firebase-image"/>
            </div>
        </div>
    )
}

// add image here


export default DogListSumary
