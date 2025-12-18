import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const leftContent = () => {
  return (
    <div className='h-full w-1/3 font-bold flex flex-col justify-between'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default leftContent
