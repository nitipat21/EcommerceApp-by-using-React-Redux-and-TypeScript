import { signOut, getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import { RootState } from "../store";
import { authSliceActions } from "../store/authSlice";

interface iAuthUserData {
  address:any[];
  authProvider:string;
  cart:any[];
  email:string;
  firstName:string;
  lastName:string;
  orderHistory:any[];
  uid:string;
}

const Account = () => {

  const auth = getAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);
  const accountData = useSelector((state:RootState) => state.auth.accountData);

  const toggleActionSuccess = () => {
    dispatch(authSliceActions.toggleActionSuccess());
    setTimeout(()=>dispatch(authSliceActions.toggleActionSuccess()),1000);
  };

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('authUser');
    dispatch(authSliceActions.setAccountData());
    toggleActionSuccess();
    setTimeout(()=>navigate('/account/login'),1000);
  };

  useEffect(()=>{   

    if (!accountData) {
      navigate('/account/login');
    }
    
  },[])

  return (
    <div className="account">
        <div className="account-wrapper">
        {isActionSuccess && <Alert message="Logout completed successfully" result={true}/>}
            <div className="account-detail-container">
              <div className="account-detail-title">
                <h1>Account Details</h1>
              </div>
              <div className="account-logout">
                <a onClick={logout}>LOG OUT</a>
              </div>
              <div className="account-detail-container">
                <p>{accountData && accountData?.address[0].address1}</p>
                <p>{accountData && accountData?.address[0].address2}</p>
                <p>{accountData && accountData?.address[0].city}</p>
                <p>{accountData && accountData?.address[0].country}</p>
                <p>{accountData && accountData?.address[0].postal}</p>
                <p>{accountData && accountData?.address[0].phone}</p>
              </div>
              <div className="account-address-link">
                <Link to='/account/address'>VIEW ADDRESSES ({accountData?.address.length})</Link>
              </div>
            </div>
            <div className="account-orderHistory">
              <div className="account-orderHistory-title">
                <h1>Order History</h1>
              </div>
              <div className="account-orderHistory-container">
                <p>You haven't placed any orders yet.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Account