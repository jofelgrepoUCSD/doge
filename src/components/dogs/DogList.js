import React from 'react'
import DogListSummary from './DogListSumary'

// Projects && projects.map 
// logic here is theat we dont want to loop 
// if projects doesnt exist

const DogList = ({ projects }) => {
    return (
        <div className="project-list section">

            {projects && projects.map(project => {
                return (
                    <DogListSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default DogList
