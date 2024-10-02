import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    {/* Logo and navigation bar is placed here  */}
                    <img src="images/adi_logo3.png" className="logo" />
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Recommendation</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header