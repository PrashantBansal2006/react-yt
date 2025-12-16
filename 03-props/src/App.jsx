import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='prashant' age = {18}/>
      <Card user='adarsh' age = {19}/>
    </div>
  )
}

export default App
