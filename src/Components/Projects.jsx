import React from 'react'
import dashboard from "../assets/dashboard.png"
import rental from "../assets/rental.png"
import banking from "../assets/banking.png"
import commerce from "../assets/commerce.png"
import proflink from "../assets/proflink.png"
import robotmind from "../assets/robotmind.png"
import { redirect } from 'react-router-dom'
function Projects() {


    let projects = [
        { name: "Robo Mind", image: robotmind, github: "", live: "https://e-robotics-liard.vercel.app/" },
        { name: "Prof-Link", image: proflink, github: "", live: "https://prof-link-delta.vercel.app/" },
        { name: "Claims Management", image: dashboard, github: "https://github.com/hosnidotech123/dashboard_pfe", live: "" },
        { name: "Car Rental", image: rental, github: "", live: "" },
        { name: "Digital Banking", image: banking, github: "https://github.com/hosnidotech123/Digital_Banking", live: "" },
        { name: "E-commerce", image: commerce, github: "https://github.com/hosnidotech123/ecommerce_react_express", live: "" },
       
        
    ]




    return (
        <div className='max-w-screen   relative '>

            <a href="#contact"><svg className='absolute right-0 cursor-pointer' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"></path><a href="#experiences"></a> </svg></a>

            <div className='text-center mb-4 flex flex-col  '>
                <h1 className='capitalize text-xl text-center text-gray-500'>browse my recent</h1>
                <h1 className='text-6xl font-semibold text-center uppercase mt-4 mb-9'>projects</h1>
            </div>
            <div className='max-w-screen h-auto grid grid-flow-row gap-8  md:grid-cols-2  lg:px-[7rem] lg:gap-y-9 xl:px-[8rem]  xl:gap-x-14  '>
                {/* Porject 1 */}
                {projects.map((project, index) => (
                    <div key={index} className='max-w-screen py-6 space-y-3  border-gray-500  border-2  px-[6vw] md:px-5 rounded-3xl border-solid h-auto grid grid-flow-row'>
                        <div className='max-w-screen h-[40vh] md:h-80 '>
                            <img className='rounded-2xl w-full h-full border-2 border-solid border-gray-400' src={project.image} alt="" />
                        </div>
                        <h1 className='text-center font-bold text-3xl'>{project.name}</h1>
                        <div className="max-w-screen h-auto grid grid-cols-2 gap-x-4">
                            <button
                                onClick={() =>
                                    window.open(`${project.github === "" ? "https://github.com/hosnidotech123" : project.github}`, "_blank", "noopener,noreferrer")
                                }
                                className="border-gray-500 hover:bg-gray-500 hover:text-white transition ease-in border-2 border-solid rounded-full py-2 capitalize font-semibold text-gray-800"
                            >
                                Github
                            </button>
                            <button
                                 disabled={!project.live}
                                onClick={() => project.live !== "" ? window.open(project.live) : alert("coming soon...")
                                }
                                className="border-gray-500 flex justify-center items-center hover:bg-gray-500 hover:text-white border-2 border-solid rounded-full py-2 transition ease-in capitalize font-semibold text-gray-800"
                            >
                                <svg  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M12.9805 21.9525C12.6579 21.9839 12.3308 22 12 22C11.6692 22 11.3421 21.9839 11.0194 21.9525L11.2132 19.9619C11.4715 19.9871 11.7339 20 12 20C12.2661 20 12.5285 19.9871 12.7868 19.9619L12.9805 21.9525Z" fill="currentColor"></path><path d="M9.09617 21.5719L9.67608 19.6578C9.17124 19.5048 8.68725 19.3031 8.22951 19.058L7.28519 20.821C7.8578 21.1277 8.46374 21.3803 9.09617 21.5719Z" fill="currentColor"></path><path d="M5.65597 19.7304L6.92562 18.1851C6.5202 17.852 6.14801 17.4798 5.81491 17.0744L4.2696 18.344C4.68539 18.8501 5.1499 19.3146 5.65597 19.7304Z" fill="currentColor"></path><path d="M3.17901 16.7148L4.94204 15.7705C4.69686 15.3127 4.49516 14.8288 4.34221 14.3239L2.42813 14.9038C2.61974 15.5363 2.87231 16.1422 3.17901 16.7148Z" fill="currentColor"></path><path d="M2.04746 12.9805L4.03806 12.7868C4.01292 12.5285 4 12.2661 4 12C4 11.7339 4.01292 11.4715 4.03806 11.2132L2.04746 11.0195C2.01607 11.3421 2 11.6692 2 12C2 12.3308 2.01607 12.6579 2.04746 12.9805Z" fill="currentColor"></path><path d="M2.42813 9.09617L4.34221 9.67608C4.49517 9.17124 4.69686 8.68725 4.94204 8.22951L3.17901 7.28519C2.87231 7.8578 2.61974 8.46374 2.42813 9.09617Z" fill="currentColor"></path><path d="M4.2696 5.65597L5.81491 6.92562C6.14801 6.5202 6.5202 6.14801 6.92562 5.81491L5.65597 4.2696C5.14991 4.68539 4.68539 5.1499 4.2696 5.65597Z" fill="currentColor"></path><path d="M7.2852 3.17901L8.22951 4.94204C8.68726 4.69686 9.17124 4.49516 9.67608 4.34221L9.09617 2.42813C8.46374 2.61974 7.8578 2.87231 7.2852 3.17901Z" fill="currentColor"></path><path d="M11.0195 2.04746C11.3421 2.01607 11.6692 2 12 2C12.3308 2 12.6579 2.01607 12.9805 2.04746L12.7868 4.03806C12.5285 4.01292 12.2661 4 12 4C11.7339 4 11.4715 4.01292 11.2132 4.03806L11.0195 2.04746Z" fill="currentColor"></path><path d="M14.9038 2.42813L14.3239 4.34221C14.8288 4.49517 15.3127 4.69686 15.7705 4.94204L16.7148 3.17901C16.1422 2.87231 15.5363 2.61974 14.9038 2.42813Z" fill="currentColor"></path><path d="M18.344 4.2696L17.0744 5.81491C17.4798 6.14801 17.852 6.5202 18.1851 6.92562L19.7304 5.65597C19.3146 5.14991 18.8501 4.68539 18.344 4.2696Z" fill="currentColor"></path><path d="M20.821 7.2852L19.058 8.22951C19.3031 8.68726 19.5048 9.17124 19.6578 9.67608L21.5719 9.09617C21.3803 8.46374 21.1277 7.8578 20.821 7.2852Z" fill="currentColor"></path><path d="M21.9525 11.0195L19.9619 11.2132C19.9871 11.4715 20 11.7339 20 12C20 12.2661 19.9871 12.5285 19.9619 12.7868L21.9525 12.9806C21.9839 12.6579 22 12.3308 22 12C22 11.6692 21.9839 11.3421 21.9525 11.0195Z" fill="currentColor"></path><path d="M21.5719 14.9038L19.6578 14.3239C19.5048 14.8288 19.3031 15.3127 19.058 15.7705L20.821 16.7148C21.1277 16.1422 21.3803 15.5363 21.5719 14.9038Z" fill="currentColor"></path><path d="M19.7304 18.344L18.1851 17.0744C17.852 17.4798 17.4798 17.852 17.0744 18.1851L18.344 19.7304C18.8501 19.3146 19.3146 18.8501 19.7304 18.344Z" fill="currentColor"></path><path d="M16.7148 20.821L15.7705 19.058C15.3127 19.3031 14.8288 19.5048 14.3239 19.6578L14.9038 21.5719C15.5363 21.3803 16.1422 21.1277 16.7148 20.821Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12Z" fill="currentColor"></path></svg>Live Demo
                            </button>
                        </div>



                    </div>
                ))}







            </div>





        </div>









    )
}

export default Projects