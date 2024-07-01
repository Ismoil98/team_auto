import React from 'react'
import ServicesCard from './ServicesCard'
import checkCard from '/card-check.png'
import saharaCar from '/sahara-car.jpg'



const uslugi = () => {
  return (
    <div className='bg-[#1e1f27]'>

      <div className="container xl text-white pt-[50px] pb-[50px]">
        <p>Luxury Cars for Rent in Dubai / Services</p>
        <ServicesCard />

        {/* FirstCard */}
        <p className='pt-[100px] pb-[50px]' >
          Sports Car Rental Dubai Style Tour in Dubai
        </p>
        <div className="first-card__cards flex gap-[20px] flex-wrap ">



          <div className="first-card__card max-w-[360px]">
            <img className='rounded-[10px] h-[235px]' src={saharaCar} alt="" />
            <h2>BASIC</h2>
            <div className="first-card__person flex gap-[20px]">
              <p>1000</p>
              <p>one person</p>
            </div>
            <h3>Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</h3>
            <h3>Package Inclusions:</h3>
            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Premium Transfer to camp</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Dune Buggy riding 1.5 hours</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Cuadro 15 min</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Falcone shoting</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Camel</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>VIP room</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Fruits, Drinks, BBQ</span>
            </div>

            <a href=""><span>BOOK NOW</span></a>


          </div>

          <div className="first-card__card max-w-[360px]">
            <img src={saharaCar} alt="" />
            <h2>BASIC</h2>
            <div className="first-card__person flex gap-[20px]">
              <p>1000</p>
              <p>one person</p>
            </div>
            <h3>Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</h3>
            <h3>Package Inclusions:</h3>
            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Premium Transfer to camp</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Dune Buggy riding 1.5 hours</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Cuadro 15 min</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Falcone shoting</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Camel</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>VIP room</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Fruits, Drinks, BBQ</span>
            </div>

            <a href=""><span>BOOK NOW</span></a>


          </div>

          <div className="first-card__card max-w-[360px]">
            <img src={saharaCar} alt="" />
            <h2>BASIC</h2>
            <div className="first-card__person flex gap-[20px]">
              <p>1000</p>
              <p>one person</p>
            </div>
            <h3>Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</h3>
            <h3>Package Inclusions:</h3>
            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Premium Transfer to camp</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Dune Buggy riding 1.5 hours</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Cuadro 15 min</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Falcone shoting</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Camel</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>VIP room</span>
            </div>

            <div className="card-item flex gap-[20px]">
              <img src={checkCard} alt="" />
              <span>Fruits, Drinks, BBQ</span>
            </div>

            <a href=""><span>BOOK NOW</span></a>


          </div>
        </div>

      </div>

    </div>
  )
}

export default uslugi