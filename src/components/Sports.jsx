import React from 'react'
import featureimage from '../images/sp.jpeg'

const Sports = () => {
  return (
    <div id='features'>
      <div className='features-model'>
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className='features-text'>
        <h2>Sports</h2>
        <h3>Sports is a <span> passion</span></h3>
        <p>Sport is a significant part of life in India. The country has a very long sports history, 
            with sports being a part of tradition, culture, finance and entertainment. People in India closely 
            follow various sports and enthusiastically participate in them. Cricket is the most popular spectator
            sport in the country, and citizens often play it as a recreational activity; it generates the highest 
            television viewership, and features full-capacity audiences in stadiums during international and 
            Indian Premier League (IPL) matches. It is part of popular culture.
        </p>
        <button>View More</button>
      </div>
    </div>
  )
}

export default Sports
