import React from 'react'
import HomeCategory from './components/homeCategory/HomeCategory'
import Uslugi from '../uslugi/uslugi'
import LuxoryCar from './components/luxoryCar/LuxoryCar'

const home = () => {
  return (
    <div className='container'>
      <HomeCategory/>
      <Uslugi/>
      <LuxoryCar/>
    </div>
  )
}

export default home