import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
          <div className='absolute h-full top-0 left-0 w-full p-8 flex flex-col justify-between'>
              <h2 className='bg-white h-10 w-10 flex justify-center items-center rounded-full font-semibold text-2xl'>{props.id + 1}</h2>
              <div>
                <div>
                <p className=' text-white mb-10 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo recusandae qui maxime optio adipisci amet?</p>
              </div>
              <div className='flex align-middle justify-between'>
                <button className='bg-white font-semibold text-black px-6 py-2 rounded-full text-30'>{props.tag}</button>
                <button className='bg-white text-black font-semibold px-3 py-3 rounded-full text-30'><ArrowRight /></button>
              </div>
              </div>
          </div>
  )
}

export default RightCardContent
