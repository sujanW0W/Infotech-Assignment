import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='canvas'>
        <div className='banner-content'>
            <div className='banner-details'>
                <div className='banner-text'>
                    <section>
                        <h1>
                            WE HEAR
                        </h1>
                        <h1>
                            WE MAKE IT HAPPEN
                        </h1>
                    </section>
                    <h2>
                        Website Development and Graphic Designing
                    </h2>
                    <p>
                        We provide a complete web and app solution by providing you the esential services including branding, graphic design, UX/UI design, web development, content, social media integration, SEO, and online marketing.
                    </p>
                </div>
                <div className='connect-button'>
                    <button>
                        <span>Connect Now</span>
                        <img src={process.env.PUBLIC_URL+'Connect.svg'} alt="" />
                    </button>
                </div>
            </div>
            <div className='banner-image'>
                <img src={process.env.PUBLIC_URL+'banner.svg'} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner