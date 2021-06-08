/*
    (subscribed)
          - - - - - - > Java Script App - - - - - -
         |                    |                    |(dispatch)
         |                    |                    |
    Redux Store  < -  -  -  - X                  Action
         ^                  (no!)                  |
         |                                         |
         |                                         |
          - - - - - - - -  Reducer < - - - - - - - 

*/
const initState = {
    // dummy data
    projects: [
        { id: '1', title: 'Evlonko', content: 'dummy_1' },
        { id: '2', title: 'KiyoyoKi', content: 'dummy_2' },
        { id: '3', title: 'Sasu', content: 'dummy_3' }
    ]
}

// This is a function that takes in two parameter
// The state set to initState and the action

// Reducer Updates the Central State
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err)
            return state;
        case 'DELETE_PROJECT':
            console.log('delete project', action.project)
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('delete project error', action.err)
            return state;

        case 'EDIT_PROJECT':
            console.log('edit project', action.project)
            return state;

        case 'EDIT_PROJECT_ERROR':
            console.log('edit project error', action.err)
            return state;

        default:
            return state
    }
}

export default projectReducer