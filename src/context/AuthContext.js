/* TODO: Remember to import any required hooks from the react library */
import React from 'react';

// Auth context object
// users: list of registered users
// user: currently logged in user
// authenticated: boolean indicating 
const initialState = {
    users: [],
    user: null,
    authenticated: false
}

// Dispatch types (for the reducer function)
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';

/* TODO: create an auth context object, using the initial state provided */

/* TODO: set up a reducer function to deal with the different auth actions */


/* TODO: Export a provider which will maintain state and 
    handle dispatching requests */

    /* TODO: Set up auth context state using the useReducer hook */

    // TODO
    // @func    login()
    // @params  user  -  the user object
    // @desc    logs the user in if the user exists; if the user does not exist, 
    //          or the passwords do not match, it throws a respective error
    // @access  public


    // TODO
    // @func    logout()
    // @params  None
    // @desc    Logs the user out
    // @access  Public
    

    // TODO
    // @func    register()
    // @params  user  -  the user object
    // @desc    registers the user by adding them to the list; if a user with 
    //          the given email already exists, it throws an error
    // @access  Public
    
    // TODO
    // @return  provider component with the state values and the functions 
    // (remember to wrap props.children within the provider)


/* TODO: export the default context object */
