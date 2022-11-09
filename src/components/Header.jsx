import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1>PowerPLAY</h1>
        <p className='details'>One man practicing sportsmanship is far better than 50 preaching it.</p>
        <div className='header-btns'>
            <a href="#" className='cv-btn1'>Download App</a>
        </div>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header
