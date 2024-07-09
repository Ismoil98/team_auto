import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {

  const [category, setCategory] = useState([]);

  
  const getCategory = () => {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/categories')
    .then(res=> res.json())
    .then(category=> {
      setCategory(category.data)
    })
  }

  useEffect(()=> {
    getCategory();
  },[])


  return (
    <div className='  h-auto pt-20 text-white bg-gray-900 p-5'>
      <div className='container mx-auto px-4'>
          <div className='flex justify-around items-center'>
            {/* Left side information */}
             <div className='flex flex-col w-[50%]'>
               <img className='max-w-[150px]' src="https://autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg" alt="Logo_auto_Zoom" />
               <h2 className='mt-10 text-white text-2xl font-bold text-left'>LUXURY CAR <br /> RENTAL IN <br /> DUBAI</h2>
               <p className='text-left text-gray-500 text-sm mt-10 w-[30%]'>
                Rent sports and luxury cars directly without intermediaries. 
                Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
               </p>
               <div className='text-left mt-16'>
               <a className="border-2 border-white p-[25px]  rounded-2xl hover:border-red-600 hover:bg-red-600 ease-in duration-300" href='Tel:+971558462124'>
                GET BEST OFFER
               </a>
               </div>
            </div>


            {/* Right side information */}
             <div  className='flex flex-col w-[100%]'>
             
             <div className='flex justify-between '>
             <div className='mr-20'>
                  <Link onClick={() => window.scrollTo({top:0})} to={"/"} className='font-bold text-xl'>
                     Cars
                  </Link>
                  <div className='mt-5'>
                    {category && category.map((item, index)=> (
                      <div key={index}>
                       <Link onClick={() => window.scrollTo({top:0})} to={`/blogs/${item.id}`} className='text-left text-gray-500 text-sm mt-[100px]'>{item.name_en}</Link>
                      </div>
                    ))}
                  </div>
               </div>

               <div className='flex flex-col mr-58 content-between'>
                  <Link onClick={() => window.scrollTo({top:0})} to={"/blogs"} className='font-bold text-xl'>
                     BLOG
                  </Link>
                  <div className='flex flex-col'>
                   <Link onClick={() => window.scrollTo({top:0})} className='mt-20'>
                    SERVICES
                   </Link>

                   <div className='mt-20'>
                     <Link onClick={() => window.scrollTo({top:0})} to={"/contacts"}>
                       CONTACTS
                     </Link>
                     <p className='text-sm text-gray-500 mt-1'>
                       Elite 3 Sports City, Dubai 26W8 24J, <br /> United Arab  Emirates
                     </p>
                     <p className='text-gray-500 text-sm'>
                     +971 55 8462124 <br />
                     Working hours: 24/7
                     </p>
                   </div>
                  </div>
               </div>
               <div className='flex flex-col content-between'>
                  <Link onClick={() => window.scrollTo({top:0})} to={"/"} className='font-bold text-xl'>
                     ABOUT US
                  </Link>
                  <div className='flex flex-col'>
                   <Link onClick={() => window.scrollTo({top:0})} to={"/"} className='text-gray-500 text-sm mt-5'>
                    Our Team
                   </Link>
                   <Link onClick={() => window.scrollTo({top:0})} to={"/Faq"} className='text-gray-500 text-sm mt-5'>
                    FAQ
                   </Link>

                   <div className='mt-28'>
                     <Link onClick={() => window.scrollTo({top:0})} to={"/"} className='font-bold text-xl'>
                       Follow Us
                     </Link>

                     <div className='mt-2 flex items-center'>
                     <Link onClick={() => window.scrollTo({top:0})} to={"/"}><FaFacebook  className='text-xl text-gray-500 hover:text-red-500 ml-2'/></Link>
                     <Link onClick={() => window.scrollTo({top:0})} to={"/"}><FaInstagram to={"/"} className='text-xl text-gray-500 hover:text-red-500 ml-2'/></Link>
                     <Link onClick={() => window.scrollTo({top:0})} to={"/"}><FaYoutube to={"/"} className='text-xl text-gray-500 hover:text-red-500 ml-2'/></Link>
                     </div>
                   </div>
                  </div>
               </div>
             </div>
        </div>
      </div>

          <hr  className='w-[70%] h-[1px] bg-gray-600 ml-[400px]'/>
          
        <div className='flex justify-between items-center mt-5'>
          <p className='ml-[400px] text-left text-sm text-gray-500 font-bold'>© 2024 Auto Zoom Car Rental. <br /> United Arab Emirates.</p>
          <Link to={"/terms"} onClick={() => window.scrollTo({top:0})} className='text-gray-500 font-bold text-sm hover:text-red-600 ease-in duration-400 '>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer