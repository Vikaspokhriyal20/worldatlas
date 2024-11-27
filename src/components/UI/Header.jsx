import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
const Header = () => {
    const [show, setShow] = useState(false);

    const handleBarToggle = () => {
        return setShow(!show);
    }

    return (
        <header>
            <div className="container">
                <div className="flex-navbar">
                    <div className="logo">
                        <NavLink to='/'>
                            <h4>WorldAtlas</h4>
                        </NavLink>
                    </div>

                    <nav className={show ? 'menu-mobile' : 'menu-web'}>
                        <ul className='nav-link-gap'>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/country'>Country</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Faq'>Faq</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-bar">
                        <button onClick={handleBarToggle} className='button'>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
