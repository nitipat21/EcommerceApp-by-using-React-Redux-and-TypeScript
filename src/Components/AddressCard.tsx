import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { authSliceActions } from "../store/authSlice"
import EditAddressForm from "./EditAddressForm"

export interface iAddressCard {
  address1:string
  address2:string
  city:string
  country:string
  isDefault:boolean
  isEdit:React.Dispatch<React.SetStateAction<boolean>>|null
  phone:string
  postal:string
  index:number
}

const AddressCard:FC<iAddressCard> = ({address1,address2,city,country,isDefault,phone,postal,index}) => {

  const dispatch = useDispatch();

  const [isDisplayEditForm,setIsDisplayEditForm] = useState(false);

  return (
    <div className="addressCard">
        <div className="defaultTag">
            <h1>{index === 0 && 'Default'}</h1>
        </div>
        <div className="addressCard-info-container">
            <p>{address1}</p>
            <p>{address2}</p>
            <p>{city}</p>
            <p>{country}</p>
            <p>{postal}</p>
            <p>{phone}</p>
        </div>
        <div className="addressCard-button-container">
            <button onClick={()=>setIsDisplayEditForm(!isDisplayEditForm)}>Edit</button>
            <button onClick={()=>dispatch(authSliceActions.deleteAccountAddress(index))}>Delete</button>
        </div>
        <div className="addressCard-editAddressForm-container">
          {isDisplayEditForm && 
            <EditAddressForm  address1={address1}
                              address2={address2}
                              city={city}
                              country={country}
                              isDefault={isDefault}
                              phone={phone}
                              postal={postal}
                              index={index}
                              isEdit={setIsDisplayEditForm}
            />
          }
        </div>
    </div>
  )
}

export default AddressCard