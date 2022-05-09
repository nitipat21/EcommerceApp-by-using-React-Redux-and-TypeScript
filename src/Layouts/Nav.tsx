import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className="nav-left">
            <button>=</button>
            <button>Search</button>
        </div>
        <div className="nav-center">
            <h1>Brand Logo</h1>
        </div>
        <div className="nav-right">
            <button>User</button>
            <button>Cart</button>
        </div>
    </nav>
  )
}

export default Nav