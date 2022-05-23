import { getAuth } from "firebase/auth";
import { FC, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from 'firebase/auth'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { authSliceActions } from "../store/authSlice";
import Alert from "../Components/Alert";

const Recover:FC = () => {

  const auth = getAuth();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email,setEmail] = useState<string>('');
  const [errorMessage,setErrorMessage] = useState<string>('');

  const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);
  const isActionFailure = useSelector((state:RootState) => state.auth.isActionFailure);

  const toggleActionSuccess = () => {
    dispatch(authSliceActions.toggleActionSuccess());
    setTimeout(()=>dispatch(authSliceActions.toggleActionSuccess()),1000);
  }

  const toggleActionFailure = () => {
    dispatch(authSliceActions.toggleActionFailure());
    setTimeout(()=>dispatch(authSliceActions.toggleActionFailure()),1000);
  }

  const sendPasswordReset = async (email:string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toggleActionSuccess();
      setEmail('');
      setTimeout(()=>navigate('/account/login'),1000);

    } catch (err:any) {
      setErrorMessage(err.toString());
      toggleActionFailure();
      console.error(err);
    }
  };

  const submit = () => {
    sendPasswordReset(email);
  }

  return (
    <div className="recover">
      <div className="recover-wrapper">
        {isActionSuccess && <Alert message="Password reset link sent!" result={true}/>}
        {isActionFailure && <Alert message={errorMessage} result={false}/>}
        <div className="recover-title">
          <h1>Reset your password</h1>
          <p>We will send you an email to reset your password</p>
        </div>
        <div className="recover-form-container">
            <input type='email' placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <button type='button' onClick={submit}>Submit</button>
            <Link to='/account/login'>CANCEL</Link>
        </div>
      </div>
    </div>
  )
}

export default Recover