import React from 'react'
import Navbar from './navbar'
import Pagef1Content from './pagef1Content'

const section1 = (props) => {
  return (
    
    <div className='h-screen w-full'>
        <Navbar/>
        <Pagef1Content users = {props.users}/>
    </div>
  )
}

export default section1
