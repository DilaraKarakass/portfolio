import React from 'react'
import {HiArrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#daedc3]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-xl text-orange-400'>MERHABA!</p>
            <h1 className='text-4xl sm:text-7xl text-blue-800 '>DEKAR ENERGY ' ye hoş geldiniz..</h1>
            <h2 className='text-4xl sm:text-7xl '>Sınırsız Enerji Sizlerle</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi vitae, odit ipsam dignissimos quam nisi eos officia delectus in atque dicta aperiam fugit excepturi eligendi sapiente impedit praesentium fugiat.</p>

            <div>
                <button className='text-purple-900 group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-200 hover:border-orange-300'>Ürünleri Gör 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className='ml-3'/>
                </span>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Home