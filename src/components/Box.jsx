import React from 'react'

const Box = (props) => {
  return (
    <div className='s-box'>
       <div className='s-b-img'>
            <img src={props.image} alt={props.alte} />
       </div>
       <div className='s-b-text'>
            <p>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre 
                of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails 
                balanced on three stumps.
            </p>
            <a href='#' className='cv-btn'>{props.button}</a>
       </div>
    </div>
  )
}

export default Box
