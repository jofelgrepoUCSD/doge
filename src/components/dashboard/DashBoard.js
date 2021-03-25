import React, { Component } from 'react'
import Notifications from './Notification'
import DogList from '../dogs/DogList'
import { connect } from 'react-redux'

// Put Dog List on the fist div ( we want it to the left) 
// Put Notification on the second div ( we want it to the right)

class DashBoard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="dashboard container">

                <div className="row">
                    <div className="col s12 m6">
                        <DogList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
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
 projects data on projectReducer
*/
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}


export default connect(mapStateToProps)(DashBoard)
