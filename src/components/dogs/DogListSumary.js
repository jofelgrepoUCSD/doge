import React from 'react'
import moment from 'moment'

// Going to be placed on DogList so that we simply need to change 
// a single Summary here and use it multiple times on DogList
const DogListSumary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.dogname}</span>
                <p> Posted by {project.authorFirstName} {project.authorLastName} </p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

// add image here


export default DogListSumary
