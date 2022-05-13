import React from 'react'
import { FaAward, FaCertificate, FaPagelines, FaUtensils,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaPinterestSquare } from 'react-icons/fa'

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
            <FaPagelines/>
            <FaCertificate/>
            <FaUtensils/>
            <FaAward/>
        </div>
        <div className="socialMedia">
            <div className="socialMedia-header">
                <h3>Be in the know</h3>
            </div>
            <div className="socialMedia-icons">
                <FaFacebookSquare/>
                <FaInstagramSquare/>
                <FaTwitterSquare/>
                <FaPinterestSquare/>
            </div>
        </div>
        <div className="email-input">
            <input type='email' placeholder='Email Address'/>
            <a>SUBSCRIBE</a>
            <h3>Please enter your email address</h3>
        </div>
        <div className="copyright">
            <small>&copy; Copyright 2018, Example Corporation</small>
        </div>
    </footer>
  )
}

export default Footer