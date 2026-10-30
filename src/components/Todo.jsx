import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [text,setText]=useState("")
    const [todos,setTodos]=useState([])

    const addData = ()=>{
        setTodos([...todos,text])
        setText("")
    }

    const deleteData = (index)=>{
        const updated = todos.filter((itm,indx)=>indx !== index )
        setTodos(updated)
    }

  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={addData}>add</button>
        <div>
            {todos.map((item,intex)=>(
                <div className="flex gap-3" key={intex}>
                    <p>{item}</p>
                    <button className='text-red-700 bg-red-400 p-1' onClick={()=>deleteData(intex)}>delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Todo