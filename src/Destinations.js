import React from 'react'
import borabora from './images/borabora.jpg'
import borabora2 from './images/borabora2.jpg'
import keywest from './images/keywest.jpg'
import maldives from './images/maldives.jpg'
import maldives2 from './images/maldives2.jpg'


function Destinations() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All inclusive Resorts</h1>
        <p>On the Caribbeans best beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt='/'/>
            <img className='w-full h-full object-cover' src={borabora2} alt='/'/>
            <img className='w-full h-full object-cover' src={keywest} alt='/'/>
            <img className='w-full h-full object-cover' src={maldives} alt='/'/>
            <img className='w-full h-full object-cover' src={maldives2} alt='/'/>     
        </div>
    </div>
  )
}

export default Destinations
