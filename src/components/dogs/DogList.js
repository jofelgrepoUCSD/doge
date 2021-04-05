import React from 'react'
import DogListSummary from './DogListSumary'
import { Link } from 'react-router-dom'

// Projects && projects.map 
// logic here is theat we dont want to loop 
// if projects doesnt exist

const DogList = ({ projects }) => {
    return (
        <div className="project-list section">

            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        < DogListSummary project={project} />
                    </Link>
                )
            })}
        </div >
    )
}

export default DogList
