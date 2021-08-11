import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");



    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be longer than 2 characters");
        }else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be longer than 2 characters");
        }else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2){
            setEmailError("email must be longer than 2 characters");
        }else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be longer than 8 characters");
        if(password !== confirmPassword){
                setPasswordError("Passwords must match");
            }
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(password !== confirmPassword){
                setPasswordError("Passwords must match");
        } else {
            setPasswordError("");
        }
    }


    const createUser = (e) => {
        handleFirstName();
        handleLastName();
        handleEmail();
        handlePassword();
        
        e.preventDefault();
        
            const newUser = { firstName, lastName, email, password };
            console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        };



    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value), handleFirstName} />

            {
                firstNameError ?
                <p>{ firstNameError }</p> :
                ''
            }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value), handleLastName} />

            {
                lastNameError ?
                <p>{ lastNameError }</p> :
                ''
            }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value), handleEmail}/>
                {
                emailError ?
                <p>{ emailError }</p> :
                ''
            }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={ password } onChange={ (e) => setPassword(e.target.value), handlePassword}/>
                {
                passwordError ?
                <p>{ passwordError }</p> :
                ''
            }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
            {
                firstNameError ?
                <input type="submit" value="Create User" disabled/> :
                <input type="submit" value="Create User" />
            }

        </form>
    );

};
export default UserForm;