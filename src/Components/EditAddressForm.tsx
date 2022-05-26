import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { authSliceActions } from "../store/authSlice";
import { iAddressCard } from "./AddressCard";
import Alert from "./Alert";

const EditAddressForm:FC<iAddressCard> = ({address1,address2,city,country,isDefault,phone,postal,index,isEdit}) => {

    const dispatch = useDispatch();

    const isActionSuccess = useSelector((state:RootState) => state.auth.isActionSuccess);

    const [editAddress1,setEditAddress1] = useState<string>(address1);
    const [editAddress2,setEditAddress2] = useState<string>(address2);
    const [editCity,setEditCity] = useState<string>(city);
    const [editCountry,setEditCountry] = useState<string>(country);
    const [editPostal,setEditPostal] = useState<string>(postal);
    const [editPhone,setEditPhone] = useState<string>(phone);
    const [editIsCheck,setEditIsCheck] = useState<boolean>(isDefault);
    
    const editAddress = () => {
        const editedAddress =  {
            address1:editAddress1,
            address2:editAddress2,
            city:editCity,
            country:editCountry,
            postal:editPostal,
            phone:editPhone,
            isDefault:editIsCheck
        }
        
        dispatch(authSliceActions.editAccountAddress({accountIndex:index,editAccountAddress:editedAddress}));
        dispatch(authSliceActions.toggleActionSuccess());

        setTimeout(()=>{
            dispatch(authSliceActions.toggleActionSuccess());
            isEdit!(prevState=> !prevState);
        },1000)

    };

    return (
        <div className="editAddressForm">
            {isActionSuccess && <Alert message="address is edited sucessfully" result={true}/>}
            <h1>Edit address</h1>
            <input type="text" placeholder='Address 1' value={editAddress1} onChange={(event)=>setEditAddress1(event.target.value)}/>
            <input type="text" placeholder='Address 2' value={editAddress2} onChange={(event)=>setEditAddress2(event.target.value)}/>
            <input type="text" placeholder='City' value={editCity} onChange={(event)=>setEditCity(event.target.value)}/>
            <input type="text" placeholder='Country' value={editCountry} onChange={(event)=>setEditCountry(event.target.value)}/>
            <input type="text" placeholder='Postal/ZIP code' value={editPostal} onChange={(event)=>setEditPostal(event.target.value)}/>
            <input type="text" placeholder='Phone' value={editPhone} onChange={(event)=>setEditPhone(event.target.value)}/>
            <div className="default-checkbox-container">
                <input type="checkbox" name='default' defaultChecked={editIsCheck} onChange={()=>setEditIsCheck(!editIsCheck)}/>
                <label htmlFor="default">Set as default address</label>
            </div>
            <div className="editAddressForm-button-container">
                <button onClick={editAddress}>Edit address</button>
                <button onClick={()=>isEdit!(prevState=> !prevState)}>Cancel</button>
            </div>
        </div>
    )
}

export default EditAddressForm