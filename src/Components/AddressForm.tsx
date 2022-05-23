import { useState } from "react"

const AddressForm = () => {

    const [address1,setAddress1] = useState<string>('');
    const [address2,setAddress2] = useState<string>('');
    const [city,setCity] = useState<string>('');
    const [country,setCountry] = useState<string>('');
    const [postal,setPostal] = useState<string>('');
    const [phone,setPhone] = useState<string>('');
    const [isCheck,setIsCheck] = useState<boolean>(false);

    return (
        <div className="addressForm">
            <h1>Add a new address</h1>
            <input type="text" placeholder='Address 1' value={address1} onChange={(event)=>setAddress1(event.target.value)}/>
            <input type="text" placeholder='Address 2' value={address2} onChange={(event)=>setAddress2(event.target.value)}/>
            <input type="text" placeholder='City' value={city} onChange={(event)=>setCity(event.target.value)}/>
            <input type="text" placeholder='Country' value={country} onChange={(event)=>setCountry(event.target.value)}/>
            <input type="text" placeholder='Postal/ZIP code' value={postal} onChange={(event)=>setPostal(event.target.value)}/>
            <input type="text" placeholder='Phone' value={phone} onChange={(event)=>setPhone(event.target.value)}/>
            <div className="default-checkbox-container">
                <input type="checkbox" name='default' defaultChecked={isCheck} onChange={()=>setIsCheck(!isCheck)}/>
                <label htmlFor="default">Set as default address</label>
            </div>
            <div className="addressForm-button-container">
                <button>Add address</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default AddressForm