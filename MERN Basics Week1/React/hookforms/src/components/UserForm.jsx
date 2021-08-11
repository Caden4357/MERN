import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [usernameError, setUsernameError] = useState("");


    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if(e.target.value.length < 3) {
            setUsernameError("Username must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setUsernameError("");
        }
    }
    

    
    const createUser = (e) => {
        handleUsername();
        
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
    //     const newUser = { 
    //         username: username, 
    //         email: email, 
    //         password: password 
    //     };
    //     console.log("Welcome", newUser);
    // };
        // shorthand ES6 syntax for building an object - see notes above
            const newUser = { username, email, password };
            console.log("Welcome", newUser);
            setUsername("");
            setEmail("");
            setPassword("");
            // updating state will change the message to be displayed in the form
            setHasBeenSubmitted( true );
        };
        // Another way to check if the form is submitted
        // const formMessage = () => {
        //     if( hasBeenSubmitted ) {
        //     return "Thank you for submitting the form!";
        // } else {
        //     return "Welcome, please submit the form";
        // }
        // };
    
    return(
        <form onSubmit={ createUser }>
            <div>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
                <label>Username: </label> 
                <input type="text" value={ username } onChange={ (e) => setUsername(e.target.value), handleUsername} />

            {
                usernameError ?
                <p>{ usernameError }</p> :
                ''
            }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            {
                usernameError ?
                <input type="submit" value="Create User" disabled/> :
                <input type="submit" value="Create User" />
            }

        </form>
    );
};
    
export default UserForm;