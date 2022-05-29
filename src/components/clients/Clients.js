import React from 'react'
import './Clients.css'

function Clients() {
  return (
    <div className='clients-outer'>
        <div  className='services-top'>
             <div className='services-top-inside'>
                    
                    </div>
                    <p>
                            Our <span>Customers</span>
                    </p>
        </div>
        <h1>
        Our <span>Clients</span> Love Our Work
        </h1>

        <h2>Take a look at our <span>Clients</span></h2>

        <p>
            But don’t just take our word for it...
        </p>

        <p className='phone-p'>We did a great job with these companies .You can be the next to work with.</p>

        <div className='images'>
            <img src={process.env.PUBLIC_URL+'lions.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'ACOS.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'Prestige.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'ACOS.jpg'} alt="" />
        </div>
    </div>
  )
}

export default Clients