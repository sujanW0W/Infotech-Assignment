import React from 'react'
import './Solution.css'
import Cards from './Cards'

function Solution() {
  return (
    <div className='solution-outer'>
        <section>
            <div  className='services-top'>
                <div className='services-top-inside'>
                        
                        </div>
                        <p>
                                Our <span>Features</span>
                        </p>
                </div>
        </section>

        <h1>
            Our <span>Solution</span> For All Your Basic Needs
        </h1>

        <p className='solution-p'>
            Whatever your digital needs, We will provide you the best services to grow your business
        </p>

        <div className='solution-cards'>
            <Cards 
                img='solution.svg'
                header = 'Mobile Development'
                paragraph = 'We specialize in creating mobile apps for Windows, Android,  and ios. Our expertise is in developing data-driven, collaborative apps for consumers with insightful analytics.'
            />
            <Cards 
                img='solution.svg'
                header = 'Graphic Designing'
                paragraph = 'Good design is all about making other designers jealous. We provide you with a uniqueness in every masterpiece designs. “You think, we design” '
            />
            <Cards 
                img='solution.svg'
                header = 'Digital Marketing'
                paragraph = 'Even a useless thing holds a different value in the market. Marketing is no longer about the stuff that you make, but about stories you tell.'
            />
        </div>

        <div className='extend'>
            <img src="extend.svg" alt="" />
        </div>

    </div>
  )
}

export default Solution