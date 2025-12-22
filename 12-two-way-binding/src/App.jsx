import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('Example: prashant')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted succesfully by", title)

    setTitle('')
  }
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Enter you name' value={title}  onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button onClick={(e)=>{
          submitHandler(e)
        }}>Submit</button>
      </form> 
    </div>
  )
}

export default App
