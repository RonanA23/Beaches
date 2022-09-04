import React from 'react'

function Select({name,data}) {
  return (
    <div className='p-2 relative'>
        <h2 className='absolute top-6 left-6 text-white'>{name}</h2>
        <img className='w-full h-full object-cover' src={data} alt='/'/>
    </div>
  )
}

export default Select