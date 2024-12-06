import React from 'react'


function Projects() {




    return (
        <div  className='max-w-screen  relative'>
                        <a href="#contact"><svg className='absolute right-0 cursor-pointer' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"></path><a href="#experiences"></a> </svg></a>

            <div className='text-center mb-4 flex flex-col  '>
                <h1 className='capitalize text-xl text-center text-gray-500'>browse my recent</h1>
                <h1 className='text-6xl font-semibold text-center capitalize mb-9'>projects</h1>
            </div>
            <div className='max-w-screen h-auto grid grid-flow-row gap-8 md:grid md:grid-cols-2  lg:px-20'>
                {/* Porject 1 */}
                <div className='max-w-screen py-6 space-y-3  border-gray-500  border-2  px-[6vw] md:px-5 rounded-3xl border-solid h-auto grid grid-flow-row'>
                    <div className='max-w-screen h-[40vh] md:h-[30vh] '>
                        <img className='rounded-2xl w-full h-full' src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h1 className='text-center font-bold text-3xl'>Project one</h1>
                    <div className="max-w-screen h-auto grid grid-cols-2 gap-x-4">
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white transition ease-in border-2 border-solid rounded-full py-2 capitalize font-semibold text-gray-800"
                        >
                            GitHub
                        </button>
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white border-2 border-solid rounded-full py-2 transition ease-in capitalize font-semibold text-gray-800"
                        >
                            Live Demo
                        </button>
                    </div>



                </div>

                <div className='max-w-screen py-6 space-y-3 md:px-5  border-gray-500  border-2  px-[6vw] rounded-3xl border-solid h-auto grid grid-flow-row'>
                    <div className='max-w-screen h-[40vh] md:h-[30vh] '>
                        <img className='rounded-2xl w-full h-full' src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h1 className='text-center font-bold text-3xl'>Project one</h1>
                    <div className="max-w-screen h-auto grid grid-cols-2 gap-x-4">
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white transition ease-in border-2 border-solid rounded-full py-2 capitalize font-semibold text-gray-800"
                        >
                            GitHub
                        </button>
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white border-2 border-solid rounded-full py-2 transition ease-in capitalize font-semibold text-gray-800"
                        >
                            Live Demo
                        </button>
                    </div>



                </div>

                <div className='max-w-screen py-6 space-y-3 md:px-5 border-gray-500  border-2  px-[6vw] rounded-3xl border-solid h-auto grid grid-flow-row'>
                    <div className='max-w-screen h-[40vh] md:h-[30vh] '>
                        <img className='rounded-2xl w-full h-full' src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h1 className='text-center font-bold text-3xl'>Project one</h1>
                    <div className="max-w-screen h-auto grid grid-cols-2 gap-x-4">
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white transition ease-in border-2 border-solid rounded-full py-2 capitalize font-semibold text-gray-800"
                        >
                            GitHub
                        </button>
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white border-2 border-solid rounded-full py-2 transition ease-in capitalize font-semibold text-gray-800"
                        >
                            Live Demo
                        </button>
                    </div>



                </div>

                <div className='max-w-screen py-6 space-y-3 md:px-5 border-gray-500  border-2  px-[6vw] rounded-3xl border-solid h-auto grid grid-flow-row'>
                    <div className='max-w-screen h-[40vh] md:h-[30vh] '>
                        <img className='rounded-2xl w-full h-full' src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h1 className='text-center font-bold text-3xl'>Project one</h1>
                    <div className="max-w-screen h-auto grid grid-cols-2 gap-x-4">
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white transition ease-in border-2 border-solid rounded-full py-2 capitalize font-semibold text-gray-800"
                        >
                            GitHub
                        </button>
                        <button
                            onClick={() =>
                                window.open("https://www.geeksforgeeks.org/reactjs-usenavigate-hook/", "_blank", "noopener,noreferrer")
                            }
                            className="border-gray-500 hover:bg-gray-500 hover:text-white border-2 border-solid rounded-full py-2 transition ease-in capitalize font-semibold text-gray-800"
                        >
                            Live Demo
                        </button>
                    </div>



                </div>

                

             

                
 

                







            </div>



        </div>









    )
}

export default Projects