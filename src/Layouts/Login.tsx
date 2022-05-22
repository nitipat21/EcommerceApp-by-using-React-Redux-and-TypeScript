import { FC, useState } from "react"
import { Link } from "react-router-dom";

const Login:FC = () => {

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>();

  const signIn = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="login-form-container">
            <input type='email' placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input type='password' placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <Link to='/account/recover'>FORGOT YOUR PASSWORD?</Link>
            <button type='button' onClick={signIn}>Sign In</button>
            <Link to='/account/register'>CREATE ACCOUNT</Link>
        </div>
      </div>
    </div>
  )
}

export default Login