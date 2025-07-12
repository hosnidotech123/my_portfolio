import React from 'react'

import me from "../assets/me.jpg"
import TypingAnimation from "./ui/typing-animation"


function Hero() {

  return (
    <div className='max-w-screen   flex flex-col lg:flex-row mt-[11dvh] lg:gap-[4rem] items-center md:mt-[5rem] lg:mt-[8rem] justify-center  '  >
      <div className='flex flex-col space-y-4 my-2 lg:order-1 ' >
        <div className='block text-center items-center space-y-[-2vw]  md:space-y-[-2vw] lg:space-y-3 lg:mb-3'>
          <h2 className='text-3xl  font-bold capitalize md:text-4xl lg:text-3xl text-gray-500'><TypingAnimation>hello, im</TypingAnimation></h2>
          <h2 className='  font-bold text-[12vw] md:text-[9vw] lg:text-5xl'><TypingAnimation delay={1000}>Hosni Tarik</TypingAnimation></h2>
          <h2 className='  text-gray-500 font-bold capitalize md:text-[8vw]  text-[9vw] lg:text-5xl'><TypingAnimation delay={2000}>full stack engineer</TypingAnimation></h2>
        </div>

        <div className='grid grid-cols-2 md:gap-x-7 md:px-8 gap-x-4 md:text-xl'>
          <button onClick={() => window.open('/files/hosni_tarik_25 pdf', '_blank')} className='border-gray-500 hover:bg-gray-500 hover:text-white transition ease-in bg-white text-gray-500 border-2 rounded-full border-solid  px-[4vw] py-2 font-bold'><a
            href="/files/hosni_tarik_25.pdf"
            target="_blank"
            download="hosni_tarik_25.pdf"
            className="block w-full h-full text-inherit no-underline"
          >Download CV</a></button>
          <button className='bg-gray-500 hover:bg-white hover:border-gray-500 hover:border-solid hover:border-2 hover:text-gray-500 transition ease-in  rounded-full text-white px-[4vw]  py-2 font-bold'><a href="#contact">Contact Info</a></button>
        </div>

        <div className='flex justify-center  items-center space-x-4 '>
          <svg onClick={() => window.open('https://www.linkedin.com/in/hosni-tarik-4827b1208/', '_blank')} className='cursor-pointer h-[50px] w-[50px] md:h-[80px] md:w-[80px] lg:w-[70px] lg:h-[70px]  transition ease-in duration-200 hover:text-blue-600' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor"></path></svg>
          <svg onClick={() => window.open('https://github.com/hosnidotech123', '_blank')} className='cursor-pointer rounded-full hover:bg-black hover:text-white text-black lg:w-[70px] lg:h-[70px]  transition ease-in duration-200 h-[50px] w-[50px] md:h-[80px] md:w-[80px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
        </div>


      </div>



      <div className='max-w-screen overflow-hidden   lg:right-0 p-[1rem] lg:p-0 rounded-full lg:w-[400px] lg:h-[400px] '>
        <img className='w-full object-cover hover:scale-[1.2] transition-all ease-out rounded-full h-full ' src={me} alt="..." />
      </div>


    </div>
  )
}

export default Hero