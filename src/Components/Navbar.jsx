import React, { useState } from 'react'

function Navbar() {

  let [toggle, setToggle] = useState(false)

  return (
    <div className='relative flex items-center justify-between   ' >
      <h2 className='font-bold text-3xl'><a href="/">Hosni Doe</a></h2>
      <ul className='hidden lg:grid lg:grid-flow-col lg:items-center font-semibold lg:gap-x-8 text-2xl capitalize'>
        <li><a href="#about">about</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#projects">projects</a></li>
        <li className='bg-slate-500 px-4 text-white  py-1 rounded-xl hover:bg-slate-400 transition ease-in-out duration-500'><a href="#contact">contact</a></li>
      </ul>
      <button className='lg:hidden transition ' onClick={() => setToggle(!toggle)}>        {toggle ? <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg> :
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path></svg>}
      </button>

      <ul className={`absolute duration-300 ease-in-out ${toggle ? "left-0" : "left-[900px] md:left-[1000px] lg:hidden "}   p-6  flex flex-col space-y-4  rounded-lg   top-[50px] bg-gray-500 border-black border-2 border-dotted text-white font-semibold   w-full h-auto text-2xl capitalize`}>
        <li onClick={()=>setToggle(false)}><a href="#about">about</a></li>
        <li onClick={()=>setToggle(false)}><a href="#experiences">Experience</a></li>
        <li onClick={()=>setToggle(false)}><a href="#projects">projects</a></li>
        <li onClick={()=>setToggle(false)}><a className='text-slate-500 px-4 bg-white  py-1 rounded-xl' href="#contact">contact</a></li>
      </ul>

    </div>
  )
}

export default Navbar