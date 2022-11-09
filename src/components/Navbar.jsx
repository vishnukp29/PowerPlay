import React from 'react'
import {Link} from 'react-scroll'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='main' className='logo'>
                <img src={logo} alt="logo" />
            </Link>
            <input className='menu-btn' type="checkbox" id='menu-btn'/>
            <label className='menu-icon' for="menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' className='active'>Home</Link></li>
                <li><Link to='features' >Sports</Link></li>
                <li><Link to='services' >Services</Link></li>
                <li><Link to='#' >Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
