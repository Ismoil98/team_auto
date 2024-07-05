import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../public/logo_auto.svg'
import {Home, Blogs, CarsAbout, CarsPage, Contacts, Faq, Terms, Uslugi, AboutUs} from '../../pages/index'

const Header = () => {

  const [brand, setBrand] = useState([]);

  const getBrand = () => {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/brands')
    .then(res=> res.json())
    .then(data=> {
      setBrand(data)
    })
  }

  useEffect(()=> {
    getBrand();
    console.log(brand)
  },[])

  return (
    <div className='text-center bg-gray-900 p-5'>
      <div className='container items-center flex justify-between '>
        <div>
        
        <form className=''>
          <input className='tex-[16px] indent-3' type="text" placeholder='Search'/>
        </form>
        </div>
        <Link className='' to={'/'}>
          <img className='w-full object-contain max-w-[110px]' src={Logo} alt="" />
        </Link>
        <nav className='flex'>
          <Link className='mx-4' to={'/carspage'}>CARS</Link>
          {/* <Link to={}>BRAND</Link> */}
          <Link className='mx-4' to={'/uslugi'}>SERVICES</Link>
          <Link className='mx-4' to={'/about'}>ABOUT US</Link>
          <Link className='mx-4' to={'/contacts'}>CONTACTS</Link>
          <Link className='mx-4' to={'/blogs'}>BLOG</Link>
        </nav>
      </div>
      
    </div>
  )
}

export default Header