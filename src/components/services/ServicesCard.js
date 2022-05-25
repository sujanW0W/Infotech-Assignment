import React from 'react'
import './ServicesCard.css'

function ServicesCard() {

  return (
    <div className='service-cards-outer'>
        <div className='flex-cards'>
            <div className='card'>
                <img src={process.env.PUBLIC_URL+'web.svg'} alt="NA" />
                <h3>Web Development</h3>
                <p>Multi-Vendor E-commerce to Small Website, Payment Integration, API Integration, Domain Registration, Web Hosting, Website Maintenance, Website Redesign</p>
                <p className='readMore'>Read More &#8594;</p>
            </div>
        </div>

        <div className='flex-cards'>
            <div className='card'>
                <img src={process.env.PUBLIC_URL+'app.svg'} alt="NA" />
                <h3>Applcation Development</h3>
                <p>IOS/Android Apps, Multi-vendor E-commerce to 
Small Apps</p>
                <p className='readMore'>Read More &#8594;</p>
            </div>
        </div>

        <div className='flex-cards'>
            <div className='card'>
                <img src={process.env.PUBLIC_URL+'Graphic.svg'} alt="NA" />
                <h3>Graphic Design </h3>
                <p>Logo Concept/Design, 2D/3D Graphics 
Design, Vector/Illustration, 2D/3D Mockups, 
Social Media Designs, UX/UI, Animation 
Concept/Designs.</p>
                <p className='readMore'>Read More &#8594;</p>
            </div>
        </div>

        <div className='flex-cards'>
            <div className='card'>
                <img src={process.env.PUBLIC_URL+'digitalMarketing.svg'} alt="NA" />
                <h3>Digital Maketing</h3>
                <p>SEO, Social Media Marketing, Pay-Per-Click, 
Content Marketing, Email Marketing,
Marketing Strategies</p>
                <p className='readMore'>Read More &#8594;</p>
            </div>
        </div>

        <div className='flex-cards'>
            <div className='card'>
                <img src={process.env.PUBLIC_URL+'blog.svg'} alt="NA" />
                <h3>Blog</h3>
                <p>Get updated with latest news on our blogs
and if you want you can also contribute 
on our blog. Join Us by creating
an account.</p>
                <p className='readMore'>Read More &#8594;</p>
            </div>
        </div>

        <div className='flex-cards'>
            <div className='card'>
                <img src={process.env.PUBLIC_URL+'contact.svg'} alt="NA" />
                <h3>Contact Support</h3>
                <p>We are available 24/7 at your service.
Contact Us if you have any kind of queries.</p>
                <p className='readMore'>Read More &#8594;</p>
            </div>
        </div>
    </div>

    )
}

export default ServicesCard