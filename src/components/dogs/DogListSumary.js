import React from 'react'

// Going to be placed on DogList so that we simply need to change 
// a single Summary here and use it multiple times on DogList
const DogListSumary = () => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Title </span>
                <p> Posted by Jofels </p>
                <p className="grey-text">March 23 2020</p>
            </div>
        </div>
    )
}

export default DogListSumary
