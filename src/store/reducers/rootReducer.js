import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

// rootReducer is just the combined reducer 
// contains authReducer and projectReducers
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer
