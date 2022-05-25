import React from 'react'
import './Tools.css'

function Tools() {
  return (
    <div className='tools-outer'>
        <div className='tools-left'>
            <section>
                <h1>
                    Tools & <span>Technologies</span> That We Use
                </h1>
                    <div  className='services-top'>
                <div className='services-top-inside'>
                        
                        </div>
                        <p>
                                WE MAKE <span>IT</span> HAPPEN
                        </p>
                </div>
            </section>
            <p className='tools-p'>
                101 Infotech utilizes high-quality technical tools such as WordPress, Laravel, CSS, Javascript, HTML My SQL, etc. in order to provide you better business solutions.
            </p>
        </div>
        <div className='tools-right'>
            <img src={process.env.PUBLIC_URL+'html.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'css.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'js.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'React.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'sass.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL+'php.jpg'} alt="" />
        </div>
    </div>
  )
}

export default Tools