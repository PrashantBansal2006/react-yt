import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [Task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...Task]

    copyTask.push({ Title, Details })

    setTask(copyTask)
    setDetails('')
    setTitle('')
  }

  const Delete = (idx) => {
    const copyTask = [...Task]
    console.log(idx)
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className=' bg-black text-white flex flex-col p-40'>
      <div>
        <h1 className='font-bold mb-10 text-4xl'>Add notes</h1>
        <form action="" className='flex items-start gap-20 justify-start '>
          <div className='w-full flex flex-col gap-4 items-start '>
            <input
              type="text"
              placeholder='Enter Notes Title'
              className='w-full py-2 px-5 border-2 rounded-md outline-none '
              value={Title}
              onChange={(e) => {
                setTitle(e.target.value)
              }} />

            <input
              type="text"
              placeholder='Write Details'
              className='w-full py-2 px-5 border-2 rounded-md h-20 outline-none'
              value={Details}
              onChange={(e) => {
                setDetails(e.target.value)
              }} />


            <button onClick={(e) => {
              submitHandler(e)
            }} className='w-full active:scale-95 h-10 rounded-md bg-white text-black'>Add Notes</button>

          </div>
        </form>
      </div>
      <div className='mt-40'>
        <h1 className='font-bold mb-10 text-4xl'>Your Notes</h1>
        <div className='flex flex-wrap justify-start gap-[2%]'>
          {Task.map(function (e, idx) {
            return <div id={idx} className='flex items-start justify-between flex-col h-60 w-[48%] rounded-2xl bg-white mb-[20px] text-black pt-3 pl-5'>
              <div className='w-[100%]'>
                <div className='font-bold text-3xl'>{e.Title}</div>
                <p className='mt-3 w-[93%]'>{e.Details}</p>
              </div>
              <button onClick={() => {
                Delete(idx)
              }} className='mb-[20px] text-white hover:bg-red-600 active:scale-95 bg-red-500 rounded-2xl px-4 py-1.5'>Delete</button>
            </div>
          })
          }
        </div>

      </div>
    </div>
  )
}

export default App
