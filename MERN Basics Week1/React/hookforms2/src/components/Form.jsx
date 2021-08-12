import React, {useState} from 'react';


const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password};
        console.log("welcome", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <div>
            <form onSubmit = { createUser }>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value) }/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange = { (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange = { (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} onChange = { (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" value={confirmPassword} onChange = { (e) => setConfirmPassword(e.target.value) }/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
            <h3>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{ firstName }
                </p>
                <p>
                    <label>Last Name: </label>{ lastName }
                </p>
                <p>
                    <label>Email: </label>{ email }
                </p>
                <p>
                    <label>Password: </label>{ password }
                </p>
                <p>
                    <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </div>
    )
}
export default Form;