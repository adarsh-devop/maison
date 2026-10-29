import React, { useState } from 'react'

const Showhide = () => {

    const [visable,setVisable]=useState(true)

    const app = () =>{
        setVisable((prve)=>!prve)
    }
  return (
    <div>
        {visable && (
            <p>hi</p>
        )}
        <button onClick={app}>{visable ? "hide" : "show"}</button>
    </div>
  )
}

export default Showhide