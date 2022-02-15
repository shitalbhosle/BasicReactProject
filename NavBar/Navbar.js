import React, { useState, useRef, useEffect } from 'react'
//import { FaBars, FaTwitter } from 'react-icons/fa'
import { FaAccessibleIcon, FaTwitter } from "react-icons/fa";
import { links, social } from './data'
import logo from './logo.png'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    

    return <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="logo" />
                <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaAccessibleIcon />
          </button>
            </div>
            
            <div className="links-container show-container" ref={linksContainerRef}></div>
            <ul className="links" ref={linksRef}>
                {links.map((link) => {
                    const { id, url, text } = link
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>

                    )

                })}
            </ul>
            
            
            <ul className="social-icons">
                {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon

                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )

                })}
            </ul>
        </div>

    </nav>
}

export default Navbar