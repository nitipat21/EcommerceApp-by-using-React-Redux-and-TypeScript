import { signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import { RootState } from "../store";
import { authSliceActions } from "../store/authSlice";

const Account = () => {

  const auth = getAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);

  const toggleActionSuccess = () => {
    dispatch(authSliceActions.toggleActionSuccess());
    setTimeout(()=>dispatch(authSliceActions.toggleActionSuccess()),1000);
  };

  const logout = () => {
    signOut(auth);
    toggleActionSuccess();
    setTimeout(()=>navigate('/account/login'),1000);
  };

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
                <p>address1</p>
                <p>address2</p>
                <p>city</p>
                <p>country</p>
                <p>postal</p>
                <p>phone</p>
              </div>
              <div className="account-address-link">
                <Link to='/account/address'>VIEW ADDRESSES (0)</Link>
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