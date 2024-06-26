import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesCard() {
  return (
    <div>
      <h2 className='services-title text-[32px] pt-[50px] pb-[50px]'>Services</h2>
      <div className="services-wrapper flex gap-[30px]">
        <div className="first-card max-w-[360px]">
          <img className='first-card__img h-[240px] w-[100%] ' src="https://autozoomrental.com/static/media/sercardimg1.40892caaec9bfa3d404a.jpg" alt="" />
          <h3 className='first-card__title font-bold text-[24px] mb-[25px] mt-[25px]'>Sports Car Rental Dubai Style Tour in Dubai</h3>
          <h4 className='first-card__subtitle mb-[25px] mt-[25px]'>Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!</h4>
          <Link className='first-card__btn flex gap-[10px] items-center' to="/uslugi/first" ><span>LEARN MORE</span> <img src="https://autozoomrental.com/static/media/cardLink.bed99f62ffc95c7f584de45ef8c56c7e.svg" alt="" /></Link>
        </div>
        <div className="second-card max-w-[360px]">
          <img className='second-card__img h-[240px] w-[100%] ' src="	https://autozoomrental.com/static/media/sercardiimg2.79fb9209cbfcc61c8c65.jpg" alt="" />
          <h3 className='second-card__title font-bold text-[24px] mb-[25px] mt-[25px]'>Photoshoot with luxury car rental Dubai</h3>
          <h4 className='second-card__subtitle mb-[25px] mt-[25px]'>Professifont-boldnal car photoshoot as an additional type of service at Auto Zoom Car Rental</h4>
          <Link className='second-card__btn flex gap-[10px] items-center' to="/uslugi/second"><span>LEARN MORE</span> <img src="https://autozoomrental.com/static/media/cardLink.bed99f62ffc95c7f584de45ef8c56c7e.svg" alt="" /></Link>
        </div>
      </div>

    </div>
  )
}
