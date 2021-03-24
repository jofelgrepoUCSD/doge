import React from 'react'

const DogDetail = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>hello everybody everybody clap your hands</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Froilan Grepo</div>
                    <div> March 24 2021</div>
                </div>
            </div>
        </div>
    )
}

export default DogDetail
