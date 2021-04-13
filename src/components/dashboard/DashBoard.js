import React, { Component } from 'react'
import DogList from '../dogs/DogList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

// Put Dog List on the fist div ( we want it to the left) 
// Put Notification on the second div ( we want it to the right)

class DashBoard extends Component {
    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='signin' />
        return (
            <div className="dashboard container">

                <div className="row">
                    <div className="col s12 m6">
                        <DogList projects={projects} />
                    </div>
                </div>

            </div >
        );
    }

}
/* Retrieve data from redux store
 map data from store to props
 state.project ->  to access the
 projectReducer of rootreducer
 state.project.projects -> to access the
 projects data on projectReducer (dummy)
*/
const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    };
};

/**
 *  This is to connect the firestore database,
 *  we are getting the collection from the firestore
 *  database
 */
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "projects", orderBy: ['createdAt','desc'] }
    ]))
    (DashBoard);
