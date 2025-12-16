import React from 'react'

const card = (props) => {
  return (
    <div className='card'>
        <img src="https://images.pexels.com/photos/11317180/pexels-photo-11317180.jpeg?_gl=1*vf92zf*_ga*MTI3MTg4MTYzMC4xNzUwMDAwOTk3*_ga_8JE65Q40S6*czE3NjU4Njc3NzQkbzQkZzEkdDE3NjU4Njc3OTckajM3JGwwJGgw" alt="#" />
        <h1>{props.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>button</button>
    </div>
  )
}

export default card
