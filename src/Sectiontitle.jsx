import React from 'react'

const Sectiontitle = ({ title,maintitle,m2,description }) => {
  return (
    <div className="flex flex-col items-center  bg-[#F5EBD0]">
    <p className="pt-20 pb-10 uppercase font-light font-out text-[#7f011f]">{title}</p>
    <h2 className="flex flex-col max-w-xl text-center items-center font-ply  text-7xl  text-[#7f011f]">{maintitle}</h2>
    <h2 className="flex flex-col max-w-xl text-center items-center font-ply  text-7xl  text-[#7f011f]">{m2}</h2>
    <p className=" flex flex-col max-w-xl text-center items-center p-11 font-light   gap-2  text-[#7f011f]">{description}</p>
</div>
  )
}

export default Sectiontitle