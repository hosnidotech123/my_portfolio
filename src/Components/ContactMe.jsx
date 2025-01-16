import React from 'react'

function ContactMe() {



  return (




    <section className="bg-gray-200 rounded-xl">

      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg font-semibold">
              Let's build something extraordinary together! Whether you have a vision for a groundbreaking project, need a reliable full-stack engineer to bring your ideas to life, or just want to explore innovative solutions, I’m here to help. With expertise in modern web technologies and a commitment to delivering excellence, I can turn your concepts into reality. Don’t hesitate reach out today, and let’s create the future, one line of code at a time!
            </p>

            <div className="my-8  font-semibold" >
              <a href="#" className="text-2xl font-bold text-pink-600">06 06 06 06 06</a>

              <address className="my-2 not-italic text-lg uppercase">Casablanca , Morocco</address>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100   shadow-lg  flex flex-col space-y-4 pl-6  py-9 ">
            <a href="mailto:hosnidotech@gmail.com" target="_blank">
              <div className="flex space-x-2  h-full">
                <div className="w-9 h-9 ">
                  <img className="w-full h-full object-cover" src="https://www.svgrepo.com/show/484670/mail-part-3.svg" alt="" />
                </div>
                <h1 className='font-semibold hover:text-transparent text-black hover:bg-clip-text hover:bg-mailgradient transition-all ease-in-out duration-300'>hosnidotech@gmail.com</h1>

              </div>
            </a>


            <a href="https://github.com/hosnidotech123" target="_blank">
              <div className="flex space-x-2  items-center h-full">
                <div className="w-9 h-9 ">
                  <img className="w-full h-full object-cover" src="https://www.svgrepo.com/show/353783/github-octocat.svg" alt="" />
                </div>
                <h1 className='font-semibold hover:text-gray-500 transition-all ease-in-out duration-300'>My Github Profile</h1>

              </div>
            </a>

            <a href="https://www.linkedin.com/in/hosni-tarik-4827b1208/" target="_blank">
              <div className="flex space-x-2 items-center  h-full">
                <div className="w-9 h-9 ">
                  <img className="w-full h-full object-cover" src="https://www.svgrepo.com/show/354000/linkedin-icon.svg" alt="" />
                </div>
                <h1 className='font-semibold hover:text-blue-600 transition-all ease-in-out duration-300'>My Linkedin Profile</h1>

              </div>
            </a>

          </div>
        </div>
      </div>
    </section>


  )
}

export default ContactMe