import { addDoc, collection } from '@firebase/firestore';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../Components/Alert';
import { db } from '../firebase-config';
import { RootState } from '../store';
import { authSliceActions } from '../store/authSlice';

const Register:FC = () => {

    const auth = getAuth();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);
    const isActionFailure = useSelector((state:RootState) => state.auth.isActionFailure);  

    const [firstName,setFirstName] = useState<string>('');
    const [lastName,setLastName] = useState<string>('');
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

    const registerWithEmailAndPassword = async (firstName:string, lastName:string, email:string, password:string) => {
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const user = res.user;
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            authProvider: "local",
            email,
          });

          toggleActionSuccess();
          setTimeout(()=> navigate('/account/login'),2000);

        } catch (err:any) {
          setErrorMessage(err.toString());
          toggleActionFailure();
          console.error(err);
        }
    };

    const createUser = () => {
        registerWithEmailAndPassword(firstName,lastName,email,password);
    };

    return (
        <div className="register">
            <div className="register-wrapper">
                {isActionSuccess && <Alert message="Registation completed successfully" result={true}/>}
                {isActionFailure && <Alert message={errorMessage} result={false}/>}
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