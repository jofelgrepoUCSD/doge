/* Action Creator that returns a function because of THUNK
   All actions are created here
*/


export const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
        // Make async call to database
        // To do this we can import packages to make it simple
        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Jofel',
            authorLastName: 'Gerpo',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};


export const deleteProject = (project) => {
    return (dispatch, getState) => {
        // Make async call to database
        dispatch({ type: 'DELETE_PROJECT', project });
    }
};