import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddressCard from '../Components/AddressCard'
import AddressForm from '../Components/AddressForm'
import { RootState } from '../store'
import { authSliceActions } from '../store/authSlice'

const Address = () => {

    const dispatch = useDispatch();

    const isDisplayAddressForm = useSelector((state:RootState) => state.auth.isDisplayAddressForm);

    const toggleAddressForm = () => {
        dispatch(authSliceActions.toggleAddressForm());
    };

    const accountData = useSelector((state:RootState) => state.auth.accountData);

    const addressCardElement = accountData?.address.map((address,index) => {
        if (address) {
            return  <AddressCard    
                    address1={address.address1}
                    address2={address.address2}
                    city={address.city}
                    country={address.country}
                    isDefault={address.isDefault}
                    phone={address.phone}
                    postal={address.postal}
                    index={index}
                    key={index}
                    isEdit={null}
                />
        }
    })

    return (
        <div className="address">
            <div className="address-wrapper">
                <div className="address-title">
                    <h1>Addresses</h1>
                </div>
                <div className="return-link">
                    <Link to='/account/'>RETURN TO ACCOUNT DETAILS</Link>
                </div>
                <div className="addAddress-button">
                    <button onClick={(toggleAddressForm)}>Add a new address</button>
                </div>
                {isDisplayAddressForm && <AddressForm/>}
                <div className="addressCard-container">
                    {addressCardElement}
                </div>
            </div>
        </div>
    )
}

export default Address