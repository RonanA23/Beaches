import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-gray-400 py-16'>
        <div className='sm:flex justify-between max-w-[1240px] mx-auto items-center text-center'>
        <h1 className='text-3xl mt-2'>BEACHES.</h1>
        <div>
            <ul className='flex justify-between w-full sm:max-w-[200px] my-4'>
                <li><BsFacebook className='bg-blue text-3xl text-blue-800'/></li>
                <li><BsInstagram className='bg-blue text-3xl text-blue-800'/></li>
                <li><BsPinterest className='bg-blue text-3xl text-blue-800'/></li>
                <li><BsTwitter className='bg-blue text-3xl text-blue-800'/></li>
                <li><BsYoutube className='bg-blue text-3xl text-blue-800'/></li>
            </ul>
        </div>
        </div>
        <div className='flex justify-between max-w-[1240px] mx-auto'>
        <ul className='lg:flex w-full'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
        </ul>
        <ul className='lg:flex w-full'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
        </ul>

        </div>
      
    </div>
  )
}

export default Footer