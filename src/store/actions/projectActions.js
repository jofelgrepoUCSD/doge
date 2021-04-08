/**
   This file is an Action Creator that returns a function (thunk) 
   All actions are created at this file
*/

/**
 *  This method is responsible on creating a project
 *  by using the information of the user and user's input.
 *  This is then stored in the firestore database by
 *  getting an instance of the firestore and then using .add()
 * 
 * @param project contains the information the user filled up
 */
export const createProject = (project) => {

    return (dispatch, getState, { getFirebase }) => {
        //Make async call to database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;
        firestore.collection('projects').doc(project.dogname).set({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            createdAt: new Date(),
        }).then(() => {
            // Dispatch goes to reducers -> projectReducer
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        });
    }
};


export const deleteProject = (project) => {

    return (dispatch, getState, { getFirebase }) => {
        //Make async call to database
        const firestore = getFirebase().firestore();
        firestore.collection('projects')
            .doc(project.dogname)
            .delete().
            then(() => {
            // Dispatch goes to reducers -> projectReducser
            dispatch({ type: 'DELETE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'DELETE_PROJECT_ERROR', err })
        });
    }
};