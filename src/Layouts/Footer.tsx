import React from 'react'

const Footer = () => {
  return (
    <footer>
        <ul className='linkList'>
            <li>FAQ</li>
            <li>CONTACT</li>
            <li>BLOG</li>
            <li>TERMS</li>
            <li>PRIVACY</li>
            <li>SHIPPING & RETURNS</li>
        </ul>
        <div className="certificate">
            Certificate Logo
        </div>
        <div className="socialMedia">
            <div className="socialMedia-header">
                <h1>Be in the know</h1>
            </div>
            <div className="socialMedia-icons">
                <h1>Icons</h1>
            </div>
        </div>
        <div className="email-input">
            <input type='email' placeholder='Email Address'/>
            <button>SUBSCRIBE</button>
            <h3>Please enter your email address</h3>
        </div>
        <div className="copyright">
            <small>&copy; Copyright 2018, Example Corporation</small>
        </div>
    </footer>
  )
}

export default Footer