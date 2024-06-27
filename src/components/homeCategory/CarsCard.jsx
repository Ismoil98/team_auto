import React from 'react'
import { Link } from 'react-router-dom'

const CarsCard = ({data}) => {
    const urlImg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/"
  return (
    <div className='hover:bg-[#24233a] transition-all duration-300 w-fit rounded-3xl px-4 py-7'>
        <Link to={'/'}>
        <div>
            <img className='w-full max-w-[270px] h-[190px] object-cover' src={`${urlImg}${data.car_images[0].image.src}`} alt="" />
        </div>
        {
            data.inclusive?
            <div className='px-2 py-3 border-[2px] border-red-500 rounded-xl font-bold text-white text-[16px] mt-8'>
                5000 AED & ALL INCLUSIVE
            </div>
            :null
        }
        <div className='mt-8'>
            <h3 className='text-white text-sm'>
                {data.brand.title} {data.model.name}
            </h3>
            <div className='w-full h-[1px] bg-[#ffffff63] my-2'></div>
            <h2 className='text-white text-[16px] font-bold'>
                AED {data.price_in_aed}  
                <span className='text-[#9e9a9a] text-sm'> / ${data.price_in_usd}</span>
            </h2>
            <small className='text-[#9e9a9a] text-sm'>per day</small>
        </div>
        </Link>
    </div>
  )
}

export default CarsCard