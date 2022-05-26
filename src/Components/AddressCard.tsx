import { FC } from "react"

interface iAddressCard {
  props: {}
}

const AddressCard:FC<iAddressCard> = (props) => {
  return (
    <div className="addressCard">
        <div className="defaultTag">
            <h1>Default</h1>
        </div>
        <div className="addressCard-info-container">
            <p>address1</p>
            <p>address2</p>
            <p>city</p>
            <p>country</p>
            <p>postal</p>
            <p>phone</p>
        </div>
        <div className="addressCard-button-container">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default AddressCard