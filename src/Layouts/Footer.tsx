import { useState } from 'react'
import { FaAward, FaCertificate, FaPagelines, FaUtensils,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaPinterestSquare } from 'react-icons/fa'

const Footer = () => {

    const [email,setEmail] = useState('');
    const [submit,setSubmit] = useState(false);

    const subscribe = () => {
        setSubmit(true)
    }

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
                <input type='email' placeholder='Email Address' value={email} onChange={(event)=>setEmail(event.target.value)}/>
                <a onClick={subscribe}>SUBSCRIBE</a>
                { submit && email === '' ? <h3>Please enter your email address</h3> : '' }
            </div>
            <div className="certificate">
                <FaPagelines/>
                <FaCertificate/>
                <FaUtensils/>
                <FaAward/>
            </div>
            <div className="copyright">
                <small>&copy; Copyright 2018, Example Corporation</small>
            </div>
        </footer>
    )
}

export default Footer