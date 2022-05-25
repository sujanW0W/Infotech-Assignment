import React from 'react'
import './RecentBlock.css'

function RecentBlock() {
  return (
    <div className='recent-outer'>
        <div  className='recent-img'>
            <img src={process.env.PUBLIC_URL+'recent.jpg'} alt=""/>

        </div>
        <section>
            <div  className='services-top'>
             <div className='services-top-inside'>
                    
                    </div>
                    <p>
                            Our Recent <span>Project</span>
                    </p>
            </div>
            <div className='recent-header'>
                <h1>
                    Danira’s  <span>Dalmoth Company</span> 
                </h1>

                <p>Danira’s is a brand of “Pushpanjali Spices and Food Products”is a premium manufacturer and supplier of innovative quality food products at competitive rate.     Danira’s is a product which has been launched in most of the places in Nepal. It a product with perfect mixture of spices and namkeens. 
                </p>

                <button>
                    View More Portfolio
                </button>
            </div>
        </section>
    </div>
  )
}

export default RecentBlock