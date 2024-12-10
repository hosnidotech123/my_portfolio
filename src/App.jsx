import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Navbars from './Components/Navbars'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'







function App() {
  return (
    <div className='max-w-screen min-h-screen overflow-x-hidden'>
      <div className=" max-w-[80%]  h-auto m-auto flex flex-col space-y-20  py-8 ">


        {/* Section 1 */}
        <section className="lg:h-screen  ">
          <Navbar />
          <Hero />
        </section>

        {/* Section 2 */}
        <section id='about' className="lg:h-screen  scroll-m-0 xl:scroll-m-[-3rem] ">
          <About />
        </section>

        {/* Section 3 */}
        <section id='experiences' className="lg:h-screen  scroll-m-0   xl:scroll-m-[-6rem]">
          <Experience />
        </section>

        {/* Section 4 */}
        <section id='projects' className="min-h-screen  xl:scroll-m-[-9rem]">
          <Projects />
        </section>

        {/* Section 5 */}
        <section id='contact' className="lg:h-screen    ">
          <div className='text-center mb-9 flex flex-col  '>
            <h1 className='capitalize text-xl text-center text-gray-500'>get in touch</h1>
            <h1 className='text-5xl font-semibold text-center capitalize '>Contact me</h1>
          </div>
          <Contact />
          <footer className='text-center mt-7 font-semibold'>Copyright &copy; {new Date().getFullYear()} All rights reserved</footer>

        </section>




      </div>

    </div>

  )
}

export default App