import React from 'react'
import { CornerDownRight } from 'lucide-react'
const navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-25'>
      <h4 className='bg-black text-white rounded-full px-7 py-1 uppercase'>Target audience</h4>
      <button className='bg-gray-100 px-7 py-1 uppercase rounded-full tracking-wider text-sm relative left-[2%]'><CornerDownRight className='inline-block size-5' />Digital Banking Platform</button>
    </div>
  )
}

export default navbar
