import React from 'react'

const EditDog = ({props}) => {


    const handleEdit = () => {
        //<EditForm props={props}/>
    }

    return (
        <div>
            <btn className="delete-btn" onClick={handleEdit}>Edits</btn>
            
        </div>
    )
}

export default EditDog
