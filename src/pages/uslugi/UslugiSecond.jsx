import React from 'react'
import checkCard from '/card-check.png'
import saharaCar from '/sahara-car.jpg'

const UslugiSecond = () => {
  return (
    <div className='container'>
      <p className='pt-[100px] pb-[50px]' >
        Sports Car Rental Dubai Style Tour in Dubai
      </p>
      <div className="first-card__cards flex gap-[20px] flex-wrap ">

        <div className="first-card__card max-w-[360px] ">
          <img className='rounded-[10px] h-[235px]' src={saharaCar} alt="" />
          <h2 className='first-card__title pt-[10px] pb-[30px] text-[24px] font-normal p-[10px]'>BASIC</h2>
          <div className="first-card__person flex gap-[20px] align-center pb-[20px] p-[10px]">
            <p className='border-[1px] p-[5px] border-lime-600 items-center text-[24px] rounded-[8px]'>1000</p>
            <p className='text-[18px] pt-[7px]'>one person</p>
          </div>
          <h3 className='text-[18px] p-[10px]'>Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</h3>
          <h3 className='text-[24px] pl-[10px] pr-[10px] pt-[7px] pb-[30px]'>Package Inclusions:</h3>
          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px] ">
            <img src={checkCard} alt="" />
            <span>Premium Transfer to camp</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span >Dune Buggy riding 1.5 hours</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Cuadro 15 min</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Falcone shoting</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Camel</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>VIP room</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Fruits, Drinks, BBQ</span>
          </div>
          <div className="first-card__button px-[20px] ">
            <a href="tel:+998993024512"><button className='py-[15px] px-[30px] bg-red-500 border-1 w-[100%] rounded-[15px] text-[24px] font-bold'>BOOK NOW</button></a>
          </div>


        </div>

        <div className="first-card__card max-w-[360px] ">
          <img className='rounded-[10px] h-[235px]' src={saharaCar} alt="" />
          <h2 className='first-card__title pt-[10px] pb-[30px] text-[24px] font-normal p-[10px]'>BASIC</h2>
          <div className="first-card__person flex gap-[20px] align-center pb-[20px] p-[10px]">
            <p className='border-[1px] p-[5px] border-lime-600 items-center text-[24px] rounded-[8px]'>1000</p>
            <p className='text-[18px] pt-[7px]'>one person</p>
          </div>
          <h3 className='text-[18px] p-[10px]'>Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</h3>
          <h3 className='text-[24px] pl-[10px] pr-[10px] pt-[7px] pb-[30px]'>Package Inclusions:</h3>
          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px] ">
            <img src={checkCard} alt="" />
            <span>Premium Transfer to camp</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span >Dune Buggy riding 1.5 hours</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Cuadro 15 min</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Falcone shoting</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Camel</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>VIP room</span>
          </div>

          <div className="card-item flex gap-[20px] pb-[25px] px-[10px] pt-[10px]">
            <img src={checkCard} alt="" />
            <span>Fruits, Drinks, BBQ</span>
          </div>
          <div className="first-card__button px-[20px] ">
            <a href="tel:+998993024512"><button className='py-[15px] px-[30px] bg-red-500 border-1 w-[100%] rounded-[15px] text-[24px] font-bold'>BOOK NOW</button></a>
          </div>


        </div>
      </div></div>
  )
}

export default UslugiSecond