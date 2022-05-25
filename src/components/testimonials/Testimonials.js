import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <div className='testimonials-outer'>
        <section className='testimonials-first'>
            <div  className='services-top'>
                <div className='services-top-inside'>
                        
                        </div>
                        <p>
                                Our <span>TESTIMONIALS</span>
                        </p>
            </div>
            <h1>What our <span>Trustworthy</span> clients say</h1>
        </section>
        <section className='testimonials-second'>
            <div>
                <img src={process.env.PUBLIC_URL+'test_arrow.png'} style={{transform: 'rotate(180deg)', cursor:'pointer'}} alt="" />
                <img src={process.env.PUBLIC_URL+'img_t1.png'} alt="" />
                <img src={process.env.PUBLIC_URL+'img_s1.png'} alt="" />
                <img src={process.env.PUBLIC_URL+'img_c.png'} alt="" />
                <img src={process.env.PUBLIC_URL+'img_s2.png'} alt="" />
                <img src={process.env.PUBLIC_URL+'img_t2.png'} alt="" />
                <img src={process.env.PUBLIC_URL+'test_arrow.png'} style={{cursor:'pointer'}} alt="" />
            </div>
        </section>
        <section className='testimonials-third'>
          <div>
            <p>
                “I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner, I am used to controlling and always having my finger on the pulse of my employees and contractors. 101infotech has delivered great results and has convinced me of the value of outsourcing. There were times when it was difficult to communicate but after some time or so everything starts to come together.”
                </p>
                <h2>
                Rahul Kalwar <br />
                CEO (Danira’s)
    
                </h2>
            </div>
        </section>
    </div>
  )
}

export default Testimonials