import { FC, useState } from "react"
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Alert from "../Components/Alert";
import { authSliceActions } from "../store/authSlice";

const Login:FC = () => {

  const auth = getAuth();
  const dispatch = useDispatch();

  const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);
  const isActionFailure = useSelector((state:RootState) => state.auth.isActionFailure);

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [errorMessage,setErrorMessage] = useState<string>('');

  const toggleActionSuccess = () => {
    dispatch(authSliceActions.toggleActionSuccess());
    setTimeout(()=>dispatch(authSliceActions.toggleActionSuccess()),2000);
  };

  const toggleActionFailure = () => {
    dispatch(authSliceActions.toggleActionFailure());
    setTimeout(()=>dispatch(authSliceActions.toggleActionFailure()),2000);
  };

  const logInWithEmailAndPassword = async (email:string, password:string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toggleActionSuccess();
      setEmail('');
      setPassword('');

    } catch (err:any) {
      setErrorMessage(err.toString());
      toggleActionFailure();
      console.error(err);
    }
  };

  const signIn = () => {
    logInWithEmailAndPassword(email,password);
  };

  const demoSignIn = () => {
    logInWithEmailAndPassword('nitipat.yt@gmail.com','123456789');
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        {isActionSuccess && <Alert message="Login completed successfully" result={true}/>}
        {isActionFailure && <Alert message={errorMessage} result={false}/>}
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="login-form-container">
            <input type='email' placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input type='password' placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            <Link to='/account/recover'>FORGOT YOUR PASSWORD?</Link>
            <button type='button' onClick={signIn}>Sign In</button>
            <Link to='/account/register'>CREATE ACCOUNT</Link>
            <button type='button' onClick={demoSignIn}>Demo Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Login