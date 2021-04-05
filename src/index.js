import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
// This is the binding layer 
// binds redux to our react app
import { Provider } from 'react-redux'

// Thunk is a middleware that allows to write
// action creators that return a function
import thunk from 'redux-thunk'

import { reduxFireStore, createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './config/fbConfig'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'



/*
 Create a reducer for dog and auth then comnbine as rootReducer.
 Apply 'thunk' as a middleware so we can access it features 
 we want to include getFireBase and getFireStore with thunk
 also we want to know which project in our firebase console are we connecting to
 so we pass in the fbConfig to the compose as well
*/
const store = createStore(rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
); // end of createStore()


const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};




const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading</div>;
  return children
}




/* This file kick start our project
   We wrapped <App/> with a Provider 
   containing store. This will provide our App
   with that store and interact with it
*/
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
