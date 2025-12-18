import React from 'react'

const App = () => {
  function btnClick(){
    console.log("Button is clicked");
  }

  function onChange(val){
    console.log(val)
  }
  function pageScroll(val){
    if(val>0){
      console.log("moving downward");
    }
    else if(val<0){
      console.log("moving upward");
    }
  }

  return (
    <div>
      <button onDoubleClick={btnClick}>click here</button>
      <input onChange={function(elem){
        onChange(elem.target.value)
      }}type="text" placeholder='Enter your text'/>

      <div onMouseMove={(elem)=>{}}className='box'>
      
      </div>
      
      <div onWheel={(elem)=>{
        pageScroll(elem.deltaY)
      }}>
        <div className='page'></div>
        <div className='page'></div>
        <div className='page'></div>
      </div>

    </div>
  )
}

export default App
