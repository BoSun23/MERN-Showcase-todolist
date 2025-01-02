import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () => {
     
  }

  return (
    <div className="create_form">
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
        <button type="button"onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create