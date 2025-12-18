import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'
const pagef1Content = (props) => {
  return (
    <div className='px-18  py-3 flex gap-10  h-[91vh] bg-white'>
      <LeftContent/>
      <RightContent users ={props.users}/>
    </div>
  )
}

export default pagef1Content
