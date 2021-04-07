import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import './../../style.css'

const DogDetail = (props) => {
    const { project } = props
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <img src={project.url} className="dogDetailImg"alt="firebase-image"/>
                        <br></br>
                        <span className="dog-name-detail">{project.dogname}</span>
                        <br></br>
                        <span className="dog-hobbies-detail"><strong>Breed: </strong>{project.breed}</span>
                        <span className="dog-hobbies-detail"><strong>Age: </strong>{project.age}</span>
                        <span className="dog-hobbies-detail"><strong>Hobbies: </strong>{project.hobbies}</span>
                        <br></br>
                        <span className="dog-about-detail"><strong>About {project.dogname} :</strong> <br></br>{project.about}</span>
                          
                    </div>


                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading Project</p>
            </div>
        )

    }

}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(DogDetail)
