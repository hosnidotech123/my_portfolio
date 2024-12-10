import React from 'react'

function Contact() {
    return (
       



<section className="bg-gray-200 rounded-xl">
    
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally independent from
          manufacturer and other group control gives you confidence that we will only recommend what
          is right for you.
        </p>

        <div className="mt-8 font-semibold">
          <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

          <address className="my-2 not-italic">Casablanca , Morocco</address>
          <h1>hosnidotech@gmail.com</h1>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100  p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-2 border-solid border-gray-500 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-2 border-solid border-gray-500 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-2 border-solid border-gray-500 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

         

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-2 border-solid border-gray-500 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    
    )
}

export default Contact