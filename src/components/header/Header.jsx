import React from 'react'
import { Link } from 'react-router-dom'
import {Home, Blogs, CarsAbout, CarsPage, Contacts, Faq, Terms, Uslugi, AboutUs} from '../../pages/index'

const Header = () => {
  return (
    <div className='container underline text-cente bg-gray-900 p-5'>
      <nav className='w-[600px] d-flex justify-between'>
        <Link className='mx-4 no-underline' to={'/carspage'}>CARS</Link>
        {/* <Link to={}>BRAND</Link> */}
        <Link className='mx-4 no-underline' to={'/uslugi'}>SERVICES</Link>
        <Link className='mx-4 no-underline' to={'/about'}>ABOUT US</Link>
        <Link className='mx-4 no-underline' to={'/contact'}>CONTACTS</Link>
        <Link className='mx-4 no-underline' to={'/blogs'}>BLOG</Link>
      </nav>
    </div>
  )
}

export default Header