import { FC, useState } from "react"


const Auth:FC = () => {

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>();

  const signIn = () => {
    setEmail('');
    setPassword('');

  }

  return (
    <div className="auth">
      <div className="auth-wrapper">
        <div className="auth-title">
          <h1>Login</h1>
        </div>
        <div className="auth-form-container">
            <input type='email' placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input type='password' placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <a href="">FORGOT YOUR PASSWORD?</a>
            <button type='button' onClick={signIn}>Sign In</button>
            <a href="">CREATE ACCOUNT</a>
        </div>
      </div>
    </div>
  )
}

export default Auth