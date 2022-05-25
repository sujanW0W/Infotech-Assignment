import React from 'react'
import './AboutSecond.css'

function AboutSecond() {
  return (
    <div className='about-second'>
        <div className='left-part'>
            <div>
               <section className='p-box'>
                   <h2>
                        A Timeline You Set
                   </h2>
                   <p>
                        Stop feeling stuck. We only use month-to-month contracts.
                   </p>
               </section>
               <img src={process.env.PUBLIC_URL+'calender.svg'} alt="NA" className='upper-image' />

            </div>
            <div className='lower-part'>
                <section className='p-box'>
                   <h2>
                   A Team You Know and Trust
                   </h2>
                   <p>
                   Collaborate with our in-house team. We don’t outsource.
                   </p>
               </section>
               <img src={process.env.PUBLIC_URL+'team.svg'} alt="NA" className='upper-image' />

            </div>
        </div>
        <div className='right-part'>
            <div>
               <section className='box'>
                   <h2>
                   A Price That Fits You
                   </h2>
                   <p>
                   Hit goals with a customized strategy you can afford.
                   </p>
               </section>
               <img src={process.env.PUBLIC_URL+'PriceTag.svg'} alt="NA" className='upper-image' />

            </div>
            <div className='lower-part'>
                <section className='p-box'>
                   <h2>
                   A TimA Holistic Transformation of 
                    Your Businesseline You Set
                   </h2>
                   <p>
                   Enhance marketing, sales, and customer service efforts.
                   </p>
               </section>
               <img src={process.env.PUBLIC_URL+'Business.svg'} alt="NA" className='upper-image' />

            </div>
        </div>
    </div>
  )
}

export default AboutSecond