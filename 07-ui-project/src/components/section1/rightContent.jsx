import React from 'react'
import RightCard from './RightCard'

const rightContent = (props) => {
  return (
    <div id = 'right' className='h-full w-2/3 p-6 pr-0 gap-3 flex flex-nowrap overflow-x-auto'>
      {props.users.map(function(elem, idx){
        return <RightCard key = {idx} id={idx} img = {elem.img} tag = {elem.tag}/>
      })}
    </div>
  )
}

export default rightContent
