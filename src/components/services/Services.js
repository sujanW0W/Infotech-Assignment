import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <div>
            <div className='services-head'>
            <div className='services-left'>
                <div className='services-top'>
                    <div className='services-top-inside'>
                    
                    </div>
                    <p>
                            OUR <span>SERVICES</span>
                        </p>
                </div>
                <div className='services-top-inside-second'>
                    <h1>
                        Get <span>Exceptional</span>
                    </h1>
                    <h1>
                        Service for Growth
                    </h1>
                </div>
            </div>

            <div className='services-middle'>
                <div className='services-middle-inside'>
                    
                    </div>
            </div>

            <div className='services-right'>
                    <p>Our experienced team is here to help you grow your business to a new height. We guarantee to provide services at it’s best to help you convert your idea into a brand.</p>
            </div>
        </div>

        <div className='services-cards'>
            <ServicesCard />
        </div>
    </div>
  )
}

export default Services