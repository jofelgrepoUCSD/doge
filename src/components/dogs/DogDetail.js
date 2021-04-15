import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import DeleteDog from './DeleteDog'
import './../../style.css'
import React  from 'react'

import firebase from 'firebase/app'

const DogDetail = (props) => {

    const currUser = firebase.auth().currentUser.uid;
    const projectUser = props.project.authorId

    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    } 
    const onButtonClick = () => {

        if (currUser === projectUser){
            history.push({
                pathname: '/editForm',
                state: { dogname: props.project.dogname, 
                         breed: props.project.breed,
                         age:props.project.age, 
                         hobbies:props.project.hobbies,
                         url:props.project.url,
                         nicknames:props.project.nicknames,
                         about: props.project.about,
                         authId: props.project.authorId,
                         identifier: props.project.identifier
                        }
            });
        } else {
            alert("Access Denied you don't own this doggo");
        }
    }

    const { project } = props
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <button className="back-btn" onClick={handleBack}>Back</button>
                        <DeleteDog props={props}/>
                        <button className="edit-btn" onClick={onButtonClick}>Edit</button>
                        <img src={project.url} className="dogDetailImg"alt="firebase-image"/>
                        <br></br>
                        <span className="dog-name-detail">{project.dogname}</span>
                        <span className="dog-nn-detail">{project.nicknames}</span>
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
