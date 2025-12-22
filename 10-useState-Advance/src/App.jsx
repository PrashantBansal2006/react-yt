import React, { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(10);

  const click = ()=>{
    // this will only increment num by 1
    // setnum(num+1)
    // setnum(num+1)
    // setnum(num+1)

    // this will increment num by 3
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={click}>Click Here</button>
    </div>
  )
}

export default App
