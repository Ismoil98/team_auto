import React from 'react'
// <<<<<<< HEAD
import ServicesCard from './servicesCard'
// =======
// import ServicesCard from './ServicesCard'
// >>>>>>> b7a2e9e5deac8316f83a5009c13e7da2770df474

const uslugi = () => {
  return (
    <div className='bg-[#1e1f27]'>

      <div className="container xl text-white pt-[50px] pb-[50px]">
        <p>Luxury Cars for Rent in Dubai / Services</p>
        <ServicesCard />
      </div>

    </div>
  )
}

export default uslugi