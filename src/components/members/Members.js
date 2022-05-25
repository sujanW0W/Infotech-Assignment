import React from 'react'
import './Members.css'

function Members() {
  return (
    <div className='members-outer'>
        <section className='members-first'>
            <div  className='services-top'>
                <div className='services-top-inside'>
                        
                        </div>
                        <p>
                                Our <span>Team</span>
                        </p>
            </div>
            <h1>
                Our <span>Core</span> Members
            </h1>
        </section>
        <section className='members-second'>
            <img src={process.env.PUBLIC_URL+'middlephoto.png'} alt="" />

            <img src={process.env.PUBLIC_URL+'right1.png'} style={{position: 'absolute',left: '1278px', top: '146px'}} alt="" />
            <img src={process.env.PUBLIC_URL+'right2.png'} style={{position: 'absolute',left: '1555px', top: '308px'}} alt="" />

            <img src={process.env.PUBLIC_URL+'left1.png'} style={{position: 'absolute',right: '1278px', top: '146px'}} alt="" />
            <img src={process.env.PUBLIC_URL+'left2.png'} style={{position: 'absolute',right: '1555px', top: '308px'}} alt="" />
        </section>

        <section className='members-third'>
            <div>
                <p className='members-third-p1'>
                    Sagar Chettri
                </p>
                <p className='members-third-p2'>
                Full Stack Developer
                </p>
                <p className='members-third-p3'>"The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.”</p>

                <button className='members-third-button'>
                    Join Our Team
                </button>
            </div>
        </section>
       
    </div>
  )
}

export default Members