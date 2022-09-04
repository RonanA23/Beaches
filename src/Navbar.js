import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import{AiOutlineClose} from 'react-icons/ai'
import{HiOutlineMenuAlt4} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'


function Navbar() {
  const [nav,setNav]=useState(false)

  const [logo,setLogo]=useState(false)

  const navHandler=()=>{
    
    setNav(!nav)
  }

  return (
    <div className='flex w-full justify-between h-20 px-4 items-center absolute z-10 text-white bg-transparent'>
        <div>
        <h1 onClick={navHandler} className={logo? 'hidden':'block'}>Beaches.</h1>
        </div>
        

    <ul className='hidden md:flex justify-between' >
       <li>Home</li>
       <li>Destinations</li>
       <li>Travel</li>
       <li>View</li>
       <li>Book</li>
       </ul>

       <div className='flex justify-between items-center p-4 '>
        <BsPerson size={20} className='mr-2'/>
        <BiSearch size={20}/> 
        </div>

        {/*HAMBURGER !!!!!!!!!!!!!!!!!!!!!!*/}

        <div onClick={navHandler} className='md:hidden cursor-pointer z-10'>
         {nav? <AiOutlineClose className='text-black' size={20} />:<HiOutlineMenuAlt4  size={20}/> } 
        </div>

        {/*MOBILE MENU DROPDOWN!!!!!!!!!!!!!!!!!!!!!!*/}
        <div  onClick={navHandler} className={nav? 'absolute left-0 top-0 bg-gray-100/90 w-full px-4 py-7 text-black flex flex-col': 'absolute left-[100%]' }>
          <ul>
            <h1>BEACHES</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>Views</li>
            <li className='border-b'>Book</li>

            <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
            </div>  

            <div className='flex justify-between my-6'>
              <BsFacebook className='icon'/>
              <BsTwitter className='icon'/>
              <BsInstagram className='icon'/>
              <BsPinterest className='icon'/>
              <BsYoutube className='icon'/>
            </div>
          </ul>
        </div>
       </div>
     
  )
}

export default Navbar