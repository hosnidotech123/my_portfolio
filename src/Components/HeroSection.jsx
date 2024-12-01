import React from 'react'
import avatar from "../assets/man.jpeg"

function HeroSection() {
  return (
    <div className='h-auto max-w-screen   grid-rows-2 grid lg:grid-cols-2 justify-center mt-0 border-black border-2 border-solid lg:mt-[5rem] items-center lg:px-40 px-0'>

        <div className=' lg:h-[60vh] order-2 lg:order-none border-black border-2 border-solid'>
            <div className='  lg:right-0 bg-indigo-400 rounded-full lg:w-[400px] lg:h-[400px] '>
                <img className='w-full object-cover rounded-full h-full ' src={avatar} alt="..." />
            </div>

        </div>
        <div className='lg:h-[60vh]  max-w-full h-auto    flex flex-col justify-center items-center border-black border-2 border-solid'>
          <div className='grid items-center justify-center text-center gap-y-2'>
          <h2 className='text-2xl font-semibold'>hello, im</h2>
            <h2 className='text-5xl font-bold'>John Doe</h2>
            <h2 className='text-4xl text-gray-500 font-bold capitalize'>full stack engineer</h2>
          </div>
            <div className='grid grid-flow-col gap-3 mt-9'>
                <button className='border-gray-500 border-2 rounded-full border-solid px-4 py-2 font-semibold'>Download CV</button>
                <button className='bg-gray-500   rounded-full text-white px-4 py-2 font-semibold'>Contact Info</button>
            </div>
        </div>

    </div>
  )
}

export default HeroSection