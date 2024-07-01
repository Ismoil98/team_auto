import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../Images/images'

const PageThird = () => {
  return (
    <div className=' bg-slate-800 '>
    <div className='container mx-auto px-4 h-auto'>
      <div className='pt-5'>
      <Link to={"/"} className='text-gray-500'>Luxory Cars for Dubai / Blog / Top 5 Reasons to Rent a Car Dubai</Link>
      </div>

      <div className='pt-32'> 
        <h2 className='text-4xl font-bold text-white'>TOP 5 REASONS TO RENT A CAR DUBAI STYLE THIS <br /> SUMMER</h2>
        <div>
          <p className='text-white mt-5 text-md'>
          Get as more as you possibly can from your holiday or business trip to Dubai by visiting a huge number of places each time in a different car !
           Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop 
           four-wheel solution to making the most of your time in Dubai. If you are in the search of a speedy and stylish vehicle that could help you explore this beautiful
            city in the most comfortable way, contact our offices before this amazing summer is over! You still can make it in time to benefit from our set of summer offers 
            that we call Trinity Summer Hot Deals, each of which lets you to pay for a car hire nearly 30-50% less than usual. Not only we have one of the widest breadths of luxury and sports cars in Dubai. 
          Our two huge car-hire yards allow us to provide a lot of hot deals supported by the closest attention and expertise of our staff. In our face you will meet a faithful, sincere, and reliable friend 
          ready to give you the detailed professional advice on renting wisely, beneficially, and safely.
          </p>
        <p className='text-white text-xl mt-5'>Burj Halifa</p>
        </div>
        <div>
          <img className='w-[100%] h-[600px] mt-5' src={images.blog3} alt="Blog_Car_image" />
        </div>
        <div>
         <p className='text-white mt-5 text-md'>
         Late summer and early autumn is our usual time of best deals and promotions.
          We’ve prepared a nice surprise for everyone who is crazy about adventure and driving! 
          These days you can get one of the best car hiring offers in the city, 
          which will allow you to drive the coolest cars in the world, such as Rolls Royce, Lamborghini, or Ferrari at knockdown prices!
           But let’s begin from the beginning, and consider the most feasible reasons
          why you need to hire a car while on holiday, study, or a working visit in Dubai.
         </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageThird
