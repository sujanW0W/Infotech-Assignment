import React from 'react'
import './About.css'
import AboutSecond from './AboutSecond'

function About() {
  return (
    <div className='about-outer'>
      <div className='details'>
             <h1 className='head-details'>
                <span>Movement</span> For Brand <span>Digitization</span>
            </h1>
            <p>
              101 INFOTECH is an extension of your organization. You aren’t just another client. 
              You are a partner, and you deserve an experience that is comfortable and tailored to your needs. We are the team you deserve. We don’t claim to be the best in Nepal or Kathmandu, but we do our best and deliver what you need.
            </p>
      </div>
         <AboutSecond />
    </div>
  )
}

export default About