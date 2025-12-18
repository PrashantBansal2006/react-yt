import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {

  const users = [
    {
      img:'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?_gl=1*zbyauo*_ga*MTI3MTg4MTYzMC4xNzUwMDAwOTk3*_ga_8JE65Q40S6*czE3NjYwNjIzODUkbzgkZzEkdDE3NjYwNjI0MTUkajMwJGwwJGgw',
      intro:'',
      tag:'Excellent'
    },
    {
      img:'https://images.pexels.com/photos/8519081/pexels-photo-8519081.jpeg?_gl=1*u86whg*_ga*MTI3MTg4MTYzMC4xNzUwMDAwOTk3*_ga_8JE65Q40S6*czE3NjYwNTU2NDgkbzckZzEkdDE3NjYwNTU2NTYkajUyJGwwJGgw',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.pexels.com/photos/7693232/pexels-photo-7693232.jpeg?_gl=1*tbgupi*_ga*MTI3MTg4MTYzMC4xNzUwMDAwOTk3*_ga_8JE65Q40S6*czE3NjYwNTU2NDgkbzckZzEkdDE3NjYwNTU2OTIkajE2JGwwJGgw',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.pexels.com/photos/5583996/pexels-photo-5583996.jpeg?_gl=1*jiieco*_ga*MTI3MTg4MTYzMC4xNzUwMDAwOTk3*_ga_8JE65Q40S6*czE3NjYwNTU2NDgkbzckZzEkdDE3NjYwNTU3MjMkajQ1JGwwJGgw',
      intro:'',
      tag:'UnderBanked'
    }
  ]
  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App
