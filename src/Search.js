import React from 'react'

import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='grid col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>Luxury included vacations for two people.</h2>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, omnis facere illo sed autem provident repellat molestiae dolorum qui obcaecati, vero neque, eaque impedit sunt excepturi error vel reprehenderit commodi.
                Optio officiis quis rem quibusdam atque labore impedit quaerat ipsa vitae incidunt culpa consectetur pariatur quam dolorem molestiae quo, esse id, similique nemo dolore. Voluptas quia qui quae minima illum.
                Sunt quos optio veritatis eum dolorum non fugiat nam, expedita eius nemo quis ipsum, tenetur culpa sequi soluta molestiae odit id earum. Totam sapiente quia quasi eveniet, eaque veniam neque!
                Voluptatem maxime aut facere quibusdam eaque, est tenetur nisi harum dolore, nihil nulla. Adipisci dolorem officia, quis, quibusdam sunt saepe autem est ratione unde deserunt vitae corporis accusantium facilis repudiandae?
                Rerum delectus modi ratione nemo, blanditiis unde optio eius accusamus sapiente quia magnam voluptatibus aperiam quis quibusdam, quasi vitae architecto! Minus libero itaque ab dolore pariatur facere inventore cupiditate ad!</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <button><RiCustomerService2Fill size={50}/></button>
                    <div>
                        <h2 className='py-2'>Leading Service</h2>
                        <p className='py-1'>All inclusive company for 20  years now. </p>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center'>
                    <button><MdOutlineTravelExplore size={50}/></button>
                    <div>
                        <h2 className='py-2'>Leading Service</h2>
                        <p className='py-1'>All inclusive company for 20  years now. </p>
                    </div>
                    </div>
         
         

            </div>
        </div>
        
            
            

        <div className='w-full max-w-[900px] ml-[100px] lg:ml-[20px] mx-auto'>
            <div className='border text-center'>
                <p>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT </p>
                <p className='bg-gray-500 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                <label>Destinations</label>
                <select className='border rounded-md p-2'>
                    <option>Cancun</option>
                    <option>Maldives</option>
                    <option>Bali</option>
                    <option>Bora Bora</option>
                    <option>Tahiti</option>
                </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label className='my-4'>Check-in</label>
                    <input className='border rounded-md p-2' type='date'/>
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check-out</label>
                    <input className='border rounded-md p-2' type='date'/>
                </div>
                <div>
                    <button className='w-full my-2'>Rates and Availabilities</button>
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default Search