import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-outer'>
        <div className='footer-content'>
            <div className='top'>
                <div className='top-left'>
                    <div className='top-left-content'>
                        <h1>
                            Join our newsletter
                        </h1>
                        <p>
                            Sign up to stay updated with the latest insights, news, and more.
                        </p>
                    </div>
                </div>
                <div className='top-right'>
                    <input type="email" placeholder='Your email address'  className='input-text'/>
                    <button className='subs'>
                        Subscribe
                    </button><div></div>
                </div>
            </div>
            <div className='middle'>
                <div className='middle-first'>
                    <h2 >Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>What we do</li>
                        <li>Contact</li>
                        
                    </ul>
                </div>
                <div className='middle-second'>
                    <h2>Services</h2>
                    <ul>
                        <li>Web Design</li>
                        <li>App Development</li>
                        <li>Graphic Designing</li>
                        <li>Digital Marketing</li>
                        <li>SEO Optimization</li>
                        
                    </ul>
                </div>
                <div className='middle-third'>
                    <h2>Join</h2>
                    <ul>
                        <li>Carrers at 101Infotech</li>
                        <li>Internships</li>
                        
                    </ul>
                </div>
                <div className='middle-fourth'>
                    <h2>Connect With Us</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Youtube</li>
                        
                    </ul>
                </div>
            </div>
            <div className='lower'>
                <div className='copyright'>
                    <p>Copyright 2022 101InfoTech. All rights reserved.</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='dummy'>
                    <img src={process.env.PUBLIC_URL+'dummy.svg'} alt="NA" className='dummy-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer