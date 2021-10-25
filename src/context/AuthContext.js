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

    /*
        If you're having trouble with this function, you can follow these steps:
        1. Initialize two variables:
            (i)     one to check whether the user exists
            (ii)    one that contains the user if found
        2. Loop through the user array, and find the user using the email from 
            the user object (passed in as argument)
        3. Check for the requirements:
            (i)     If the user object (initially null) is still null, it means the 
                    user was not found, and you should throw a respective error
            (ii)    If the user object is not null, check the password in the object 
                    with the one from the object received in the argument. If they don't 
                    match, throw an error
        4. Use the dispatch() function with type as LOGIN and the user object from the argument 
            as the payload
    */


    // TODO
    // @func    logout()
    // @params  None
    // @desc    Logs the user out
    // @access  Public

    /*
        This one should be pretty simple. All you need to do here is 
        call the dispatch() function with a type of LOGOUT.
    */
    

    // TODO
    // @func    register()
    // @params  user  -  the user object
    // @desc    registers the user by adding them to the list; if a user with 
    //          the given email already exists, it throws an error
    // @access  Public

    /*
        If you're having trouble with this function, you can follow these steps:
        1. Initialize a variable to check whether the user already exists
        2. Loop through the user array, and find the user using the email from 
            the user object (passed in as argument)
        3. Check for the requirements:
            (i)     If the user object (initially null) is no longer null, it means a
                    user with the given email was found. In this case, throw an error
                    (For the sake of this lab, you can't have two users with the same email)
        4. Use the dispatch() function with type as REGISTER and the user object from the argument 
            as the payload
    */
    
    // TODO
    // @return  provider component with the state values and the functions 
    // (remember to wrap props.children within the provider)


/* TODO: export the default context object */
