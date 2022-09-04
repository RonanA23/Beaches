import React from 'react'
import beachVid from './beachVid.mp4'
import {BsSearch} from 'react-icons/bs'

function Hero() {

  const alertHandler=()=>{
    alert('Alert')
  }
  return (
    <div className='w-full h-screen relative '>
        <video className='w-full h-screen object-cover' src={beachVid}autoPlay loop muted/>
        <div className='w-full h-screen object-cover absolute left-0 top-0 bg-gray-900/30'> 
        </div>
        <div className=' absolute w-full h-full top-0 text-center justify-center flex flex-col bg-transparent text-white'>
            <h1>First Class Travel</h1>
            <h2 className='py-3'>Top 1% Locations Worldwide</h2>
            <form className=' rounded text-black bg-gray-100 flex items-center justify-between mx-auto max-w-[700px] border p-1 w-full'>
                <div>
                <input placeholder='Search Destinations' className='bg-transparent focus:outline-none w-[300px] sm:w-[400px]'/>
            
                </div>
                <div>
                <BsSearch size={30} className='icon' style={{color:'white'}} onClick={alertHandler}/>

                </div>
           
           </form>
           </div>
    </div>
  )
}

export default Hero