import React from 'react'
import Box from './Box'
import image1 from '../images/c.jpg'
import image2 from '../images/f.jpg'
import image3 from '../images/t.jpg'

const Services = () => {
  return (
    <div id='services'>
      <div className="s-heading">
        <h1>Services</h1>
        <p>Our Services</p>
      </div>
      <div className='b-container'>
        <Box image={image1} alt='image1' button='Explore'/>
        <Box image={image2} alt='image1' button='Explore'/>
        <Box image={image3} alt='image1' button='Explore'/>
      </div>
    </div>
  )
}

export default Services
