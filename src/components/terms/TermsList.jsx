import React from 'react'

const TermsList = ({title,desc}) => {
  return (
    <div className='mt-8'>
        <h2 className='font-bold sm:text-xl text-lg mb-2'>{title}</h2>
        <p className='sm:text-[16px] text-sm leading-7'>{desc}</p>
    </div>
  )
}

export default TermsList