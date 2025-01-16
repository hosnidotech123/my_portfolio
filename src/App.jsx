import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Navbars from './Components/Navbars'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import ContactMe from './Components/ContactMe'






function App() {

  let [display, setDisplay] = useState(false)


  useEffect(() => {


    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setDisplay(true)
      }
      else {
        setDisplay(false)
      }
    })

  }, [])
  return (
    <div className='hide-scrollbar max-w-screen min-h-screen overflow-x-hidden relative' id=''>
      <a href="#">      <span className={`fixed z-40  right-2 bottom-2   ${display ? "transition-all ease-in-out duration-500" : "hidden"} `}><svg className='w-[50px] h-[50px] text-black hover:text-gray-500 transition-all duration-500 ease-in-out md:h-[60px] md:w-[60px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 270.63-96-96-96 96L137.37 296 256 177.37 374.63 296z"></path></svg></span>
      </a>
      <div className=" max-w-[80%]  h-auto m-auto flex flex-col space-y-20   py-8 ">





        {/* Section 1 */}
        <section className="lg:h-screen  ">
          <Navbar />
          <Hero />
        </section>

        {/* Section 2 */}
        <section id='about' className="lg:h-screen  scroll-m-0 xl:scroll-m-[-3rem]  2xl:scroll-m-0">
          <About />
        </section>

        {/* Section 3 */}
        <section id='experiences' className="lg:h-screen  scroll-m-0   xl:scroll-m-[-6rem] 2xl:scroll-m-0">
          <Experience />
        </section>

        {/* Section 4 */}
        <section id='projects' className="   xl:scroll-m-[-9rem] 2xl:scroll-m-0 ">
          <Projects />
        </section>

        {/* Section 5 */}
        <section id='contact' className="lg:h-auto  scroll-m-0 ">
          <div className='text-center mb-9 flex flex-col  '>
            <h1 className='capitalize text-xl text-center text-gray-500'>get in touch</h1>
            <h1 className='text-5xl font-semibold text-center uppercase mt-4'>Contact me</h1>
          </div>
          <ContactMe />
          <footer className='text-center mt-7 font-semibold'>Copyright &copy; {new Date().getFullYear()} All rights reserved</footer>

        </section>







      </div>

    </div>

  )
}

export default App