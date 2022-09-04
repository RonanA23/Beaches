import React from 'react'
import borabora from './images/borabora.jpg'
import borabora2 from './images/borabora2.jpg'
import keywest from './images/keywest.jpg'
import maldives from './images/maldives.jpg'
import maldives2 from './images/maldives2.jpg'
import tahiti from './images/maldives3.jpg'
import Select from './Select.js'

function Selects() {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 max-w-[1240px] mx-auto gap-4 mt-6'>
        <Select name='Bora Bora' data={borabora}/>
        <Select name='Bora Bora' data={borabora2}/>
        <Select name='Keywest' data={keywest}/>
        <Select name='Maldives' data={maldives}/>
        <Select name='Mauritius' data={maldives2}/>
        <Select name='Tahiti' data={tahiti}/>
    </div>
  )
}

export default Selects