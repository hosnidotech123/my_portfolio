import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Navbars from './Components/Navbars'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'







function App() {
  return (
  <div className=" max-w-[80%] h-auto m-auto flex flex-col space-y-20 py-8">

 
      {/* Section 1 */}
      <section className="lg:h-screen  ">
        <Navbar/>
        <Hero/>
      </section>

      {/* Section 2 */}
      <section id='about' className="lg:h-screen lg:scroll-m-[-3rem] scroll-m-0 xl:scroll-m-0">
        <About/>
      </section>

      {/* Section 3 */}
      <section id='experiences' className="lg:h-screen  scroll-m-0 lg:scroll-m-[-6rem] xl:scroll-m-0">
       <Experience/>
      </section>

      {/* Section 4 */}
      <section id='projects' className="lg:h-screen scroll-m-0 lg:scroll-m-[-10rem] xl:scroll-m-0">
        <Projects/>
      </section>

      {/* Section 5 */}
      <section id='contact' className="h-screen scroll-m-0 lg:scroll-m-[-10rem] xl:scroll-m-0 bg-purple-500">
        <h1 className="text-white text-4xl">Section 5</h1>
      </section>
 
     
  </div>
  )
}

export default App