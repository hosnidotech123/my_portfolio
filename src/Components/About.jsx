import React from 'react'
import avatar from "../assets/man.jpeg"


function About() {
    return (
        <div className='max-w-screen h-auto my-9'>
            <h1 className='capitalize text-xl text-center text-gray-500'>get to know more</h1>
            <h1 className='text-5xl font-bold text-center capitalize mb-9'>about me</h1>
            <div className='flex flex-col space-y-4 '>
                <div className='max-w-screen py-6 px-[6vw] border-gray-500 border-2 rounded-3xl border-solid h-auto flex flex-col items-center justify-center'>
                    <span>icon</span>
                    <h1 className='font-bold text-2xl'>Experience</h1>
                    <h1 className='text-gray-500 font-semibold text-xl'>3+ years </h1>
                    <h1 className='capitalize text-gray-500 font-semibold text-xl'>frontend Developement </h1>

                </div>
                <div className='max-w-screen py-6 text-center px-[6vw] border-gray-500 border-2 rounded-3xl border-solid h-auto flex flex-col items-center justify-center'>
                    <span>icon</span>
                    <h1 className='font-bold text-2xl'>Education</h1>
                    <h1 className='text-gray-500 font-semibold text-xl capitalize'>computer Science  degree EMSI </h1>
                    <h1 className='capitalize text-gray-500 font-semibold text-xl'>Physics Science bachelor</h1>

                </div>
                <p className='text-center  font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quod illum mollitia eos? Mollitia accusamus totam qui neque eum maxime.</p>
                <div className='max-w-screen h-auto flex justify-center   lg:right-0 p-[1rem] rounded-3xl lg:w-[300px] lg:h-[300px] '>
                    <img className='w-full object-cover rounded-3xl h-full ' src={avatar} alt="..." />
                </div>

            </div>
        </div>


    )
}

export default About