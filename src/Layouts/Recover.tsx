import { FC, useState } from "react"
import { Link } from "react-router-dom";

const Recover:FC = () => {

  const [email,setEmail] = useState<string>('');

  const submit = () => {
      console.log('submit')
  }

  return (
    <div className="recover">
      <div className="recover-wrapper">
        <div className="recover-title">
          <h1>Reset your password</h1>
          <p>We will send you an email to reset your password</p>
        </div>
        <div className="recover-form-container">
            <input type='email' placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <button type='button' onClick={submit}>Sign In</button>
            <Link to='/account/login'>CANCEL</Link>
        </div>
      </div>
    </div>
  )
}

export default Recover