import React from 'react'

function Cards(props) {
  return (
    <section>
        <img src={props.img} alt="" />
        <h4>{props.header}</h4>
        <p className='solution-p'>{props.paragraph}</p>
        <button>Connect Now</button>
    </section>
  )
}

export default Cards