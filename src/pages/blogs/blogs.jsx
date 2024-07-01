import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import images from './Images/images'
import { ImNext } from "react-icons/im";
const blogs = () => {
  return (
    <div className='text-white h-[100vh] bg-gray-950 overflow-hidden  overflow-y-auto'>
      <div className='container mx-auto px-4'>
        <div className='pt-10'>
         <Link to={"/"} className='text-gray-300 text-[0.9rem]'>Luxury Cars for Rent in Dubai/Blog</Link>
        </div>

        <div className='pt-5 overflow-hidden'>
          <div>
             <h1 className='text-[3rem] font-merriweather font-bold'>Blog</h1>
          </div>

          <div className='bg-slate-800 h-auto mb-10'>

            <div className='flex  justify-items-center p-5 max-w-[100%]'>
              <div className='max-w-[100%]'>
                <img className='w-[900px]' src={images.blog_white} alt="Blog_whiteCar_image" />
              </div>
              <div className='pl-5'>
                <div>
                <h3 className='text-[2rem] max-[768px]:text-[1.5rem]'>Top 3 Destinations to Visit in Dubai in a Rental Car</h3>
                  <p className='mt-10 text-[0.9rem] '>
                  One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.</p>
                </div>

                <div className=' flex justify-between justify-items-center mt-10'>
                   <p>22 Sep 2024</p>
                   <div>
                     <Link to={'/firstPage'}>
                       <ImNext className='text-[1.5rem] hover:translate-x-2 ease-out duration-300'/>
                     </Link>
                   </div>
                </div>
              </div>
            </div>
            <div className='flex  justify-items-center p-5 max-w-[100%]'>
              <div className='max-w-[100%]'>
                <img className='w-[800px]' src={images.blog2} alt="Blog_whiteCar_image" />
              </div>
              <div className='pl-5'>
                <div>
                <h3 className='text-[2rem]'>Top 5 wonderful spots for a car photo session in Dubai</h3>
                  <p className='mt-10 text-[0.9rem] w-[100%] '>
                  There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled.
                   The number of places you will die to go to and make memorable  pictures is <br /> such that it  makes you impossible to 
                   resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. <br />
                   And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?
                  </p>
                </div>

                <div className='flex justify-between justify-items-center mt-10'>
                   <p>17 Nov 2024</p>
                   <div>
                     <Link to={'/secondBlogPage'}>
                       <ImNext className='text-[1.5rem] hover:translate-x-2 ease-out duration-300'/>
                     </Link>
                   </div>
                </div>
              </div>
            </div>
            <div className='flex  justify-items-center p-5 max-w-[100%]'>
              <div className='max-w-[100%]'>
                <img className='w-[900px]' src={images.blog3} alt="Blog_whiteCar_image" />
              </div>
              <div className='pl-5'>
                <div>
                <h3 className='text-[2rem]'>Top 5 Reasons to Rent a Car Dubai Style this Summer</h3>
                  <p className='mt-10 text-[0.9rem] '>
                  Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is 
                  more than just a regular car hire business.
                  We're your one-stop four-wheel solution to making the most of your time in Dubai.
                  </p>
                </div>

                <div className='flex justify-between justify-items-center mt-10'>
                   <p>18 Oct 2024</p>
                   <div>
                     <Link to={'/thirdBlogPage'}>
                       <ImNext className='text-[1.5rem] hover:translate-x-2 ease-out duration-300'/>
                     </Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default blogs