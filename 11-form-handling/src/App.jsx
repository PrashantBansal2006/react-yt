import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted succesfully")
  }
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Enter you name'/>
        <button onClick={(e)=>{
          submitHandler(e)
        }}>Submit</button>
      </form> 
    </div>
  )
}

export default App
