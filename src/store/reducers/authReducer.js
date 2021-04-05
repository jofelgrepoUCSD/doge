
const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login Error')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success')
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('SignUp Success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('SignUp Error')
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}

export default authReducer