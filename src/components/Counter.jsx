import React, { useState } from 'react'

const Counter = () => {
    
    const [count, setCount]=useState(0)
    
    const add = () => {
        setCount((prev) =>  prev + 1)
    }

    const sub = () =>{
        setCount((prev)=> prev - 1)
    }
    const reset=()=>{
        setCount(0)
    }

    return (
    <div>
        <p>{count}</p>
        <button onClick={add}>add</button>
        <button onClick={sub}>sub</button>
        <button onClick={reset}>reset</button>
    </div>
    

  )
}

export default Counter