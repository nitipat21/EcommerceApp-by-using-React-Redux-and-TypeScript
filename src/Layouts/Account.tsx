

const Account = () => {
  return (
    <div className="account">
        <div className="account-wrapper">
            <div className="account-detail-container">
                <div className="account-detail-header">
                  <h1>Account Details</h1>
                  <a>LOG OUT</a>
                </div>
                <div className="account-name"></div>
                <div className="account-address"></div>
                <a>VIEW ADDRESSES</a>
            </div>
            <div className="account-orderHistory">
                <h1>Order History</h1>
                <p>You haven't placed any orders yet.</p>
            </div>
        </div>
    </div>
  )
}

export default Account