import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full max-w-1/3 flex rounded-4xl relative bg-black shrink-0 overflow-hidden rightcard'>
      <img className='h-full object-cover opacity-65' src={props.img} alt="#" />

      <RightCardContent tag = {props.tag} id = {props.id}/>
    </div>


  )
}

export default RightCard
