import { FC, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Alert from "../Components/Alert";
import { authSliceActions } from "../store/authSlice";
import { collection, getDocs } from '@firebase/firestore';
import { db } from "../firebase-config";


const Login:FC = () => {

  const auth = getAuth();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const usersCollectionRef = collection(db, "users");

  const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);
  const isActionFailure = useSelector((state:RootState) => state.auth.isActionFailure);
  const accountData = useSelector((state:RootState) => state.auth.accountData);

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [errorMessage,setErrorMessage] = useState<string>('');

  const toggleActionSuccess = () => {
    dispatch(authSliceActions.toggleActionSuccess());
    setTimeout(()=>dispatch(authSliceActions.toggleActionSuccess()),1000);
  };

  const toggleActionFailure = () => {
    dispatch(authSliceActions.toggleActionFailure());
    setTimeout(()=>dispatch(authSliceActions.toggleActionFailure()),1000);
  };

  const logInWithEmailAndPassword = async (email:string, password:string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toggleActionSuccess();
      setEmail('');
      setPassword('');
      getUserData();
      
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
    logInWithEmailAndPassword('nitipat.yt@gmail.com','123456');
  };

  const getUserData = async () => {
    const data = await getDocs(usersCollectionRef);

    data.docs.forEach((user) => {
      if (user.data().uid === auth.currentUser?.uid) {
        const userData = {...user.data(), docId:user.id}
        localStorage.setItem('authUser',JSON.stringify(userData));
        dispatch(authSliceActions.setAccountData());
      };
    });

    auth.onAuthStateChanged(()=>navigate('/'));
    
  };

  useEffect(()=>{

    if (accountData){
      navigate('/account');
    }

  },[])

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