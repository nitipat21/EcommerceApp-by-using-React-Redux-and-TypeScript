import { FC, useState } from 'react'

const Register:FC = () => {

    const [firstName,setFirstName] = useState<string>('');
    const [lastName,setLastName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const createUser = () => {
        console.log('created')
    }

    return (
        <div className="register">
            <div className="register-wrapper">
                <div className="register-title">
                <h1>Create Account</h1>
                </div>
                <div className="register-form-container">
                    <input type='text' placeholder="FirstName" value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>
                    <input type='text' placeholder="LastName" value={lastName} onChange={(event)=>setLastName(event.target.value)}/>
                    <input type='email' placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    <input type='password' placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <button type='button' onClick={createUser}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Register;