import React, { useState } from 'react'

const Darkmod = () => {
    const [isdark ,setIsdark]= useState(true)

    const switchmode = ()=>{
        setIsdark((prve)=>!prve)
    } 
  return (
    <div className={`h-screen text-4xl ${isdark ? "bg-gray-800": "bg-gray-100"}`}>

        <p className={`text-2xl ${isdark ? "text-gray-100":"text-gray-800"}`}>{isdark ? "dark" : "light"}</p>
        <button className={`text-lg font-ply p-3 rounded-sm ${isdark ? "text-gray-800 bg-gray-100":"text-gray-100 bg-gray-800" }`} onClick={switchmode}>switch</button>
    </div>
  )
}

export default Darkmod