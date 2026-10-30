import React, { useState } from 'react'

const Sectiontitle = ({ title,maintitle,m2,description,button }) => {

  const [nightMode, setNightMode] = useState(false);

  const darkmode = () => {
    setNightMode((prev) => !prev);
  }

  return (
    <div className={`flex flex-col items-center ${nightMode? "bg-[#F5EBD0]":"bg-black"}`}>
    <p className={`pt-20 pb-10 uppercase font-light font-out ${nightMode? "text-[#7f011f]":"text-[#F5EBD0]"}`}>{title}</p>
    <h2 className={`flex flex-col max-w-xl text-center items-center font-ply  text-7xl ${nightMode? "text-[#7f011f]":"text-[#F5EBD0]"}  `}>{maintitle}</h2>
    <h2 className={`flex flex-col max-w-xl text-center items-center font-ply  text-7xl ${nightMode? "text-[#7f011f]":"text-[#F5EBD0]"} `}>{m2}</h2>
    <p  className={`flex flex-col max-w-xl text-center items-center p-11 font-light   gap-2 ${nightMode? "text-[#7f011f]":"text-[#F5EBD0]"} `}>{description}</p>
    </div>
  )
}

export default Sectiontitle