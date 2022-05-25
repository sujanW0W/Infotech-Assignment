import React from 'react'
import './Connect.css'

function Connect() {
  return (
    <div className='connect-outer'>
        <div className='connect-left'>
            <div  className='services-top' style={{paddingLeft:'2px'}}>
                <div className='services-top-inside'>
                        
                        </div>
                        <p>
                                Connect with <span>Us</span>
                        </p>
                </div>
                <h1 className='connect-header'>
                    Make your <span>dream projects</span> on the 
            </h1>
            <h1>
            best way possible
            </h1>
            <p>Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.</p>
            </div>
           
        <div className='connect-right'>
            <input type="text" placeholder='Email Address' className='connect-input'/>
            <input type="text" placeholder='Password' className='connect-input password'/>
            <button>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Connect