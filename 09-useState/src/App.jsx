import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increseNum(){
    setnum(num+1)
  }

  function decreseNum(){
    setnum(num-1)
  }

  function decreseNumby5(){
    setnum(num-5)
  }
  return (
    <div className='parent'>
      <h1>{num}</h1>
      <div>
      <button onClick={increseNum}>Increse Num</button>
      <button onClick={decreseNum}>Decrese Num</button>
      <button onClick={decreseNumby5}>Decrese Num by 5</button>
      </div>


    </div>
  )
}

export default App
