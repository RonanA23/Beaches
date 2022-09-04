import React,{useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'


const sliderData=[
    {url:'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {url:'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {url:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
]

function Carousel() {
  const [slide,setSlide]=useState(1)
  const length=sliderData.length

  const prevSlide=()=>{
    setSlide(slide===length-1?0:slide+1)
  }
  const nextSlide=()=>{
    setSlide(slide===0?length-1:slide-1)
  }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative w-full flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='cursor-pointer absolute top-[50%] size={20} left-8 text-3xl text-white'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='cusor-pointer absolute top-[50%] size={20} right-8 text-3xl text-white'/>
        {sliderData.map((item,index)=>(
            <div className={index===slide?'opacity-100 w-full':'opacity-0'}>
                {index===slide && (<img src={item.url} className='rounded-md w-full' alt='/'/>)}
                </div>
        
        ))}
    </div>
  )
}

export default Carousel