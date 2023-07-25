import React from 'react'

import Sarı from '../assets/sarı.jpg';
import Kırmızı from '../assets/Kırmızı.jpg';
import Mavi from '../assets/mavi.jpg';


const Products = () => {
  return (
    <div name='products' className='w-full h-screen bg-[#daedc3] text-gray-400'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-orange-400 inline    '>Ürünlerimiz</p>
                <p className='py-4'>//Üç renk seçeneği ile karışınızda..</p>
            </div>

            <div className='w-full   text-center py-8'>
                <div className='shadow-md shadow-[#9eb286] hover:scale-110 duration-500'>
                    <img className='w-36 mx-auto' src={Kırmızı} alt="kırmızı" />
                    <p className='my-2'>DK-300</p>
                </div>
            </div>
            <div className='w-full  text-center py-8'>
                <div className='shadow-md shadow-[#9eb286] hover:scale-110 duration-500'>
                    <img className='w-36 mx-auto' src={Mavi} alt="mavi" />
                    <p className='my-2'>DK-200</p>
                </div>
            </div>         
            <div className='w-full   text-center py-8'>
                <div className='shadow-md shadow-[#9eb286] hover:scale-110 duration-500'>
                    <img className='w-36 mx-auto' src={Sarı} alt="sarı" />
                    <p className='my-2'>DK-100</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products