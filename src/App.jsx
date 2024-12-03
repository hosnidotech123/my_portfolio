import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Navbars from './Components/Navbars'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'



function App() {
  return (
    <div className='max-w-screen h-auto lg:w-[80%] m-auto py-7 px-6 overflow-x-hidden'>
         
        <Navbar/>
        <Hero/>
     
        <About/>
        <Experience/>
    </div>
  )
}

export default App