import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#daedc3] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-gray-400'>İletişim</p>
                <p className='text-gray-500 py-4'>// // Aşağıdaki formu gönderin</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='İsim Soyisim' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mesaj'></textarea>
            <button className='text-gray-400 border-2 hover:bg-orange-300 hover:border-orange-400 px-4 py-3 my-8 mx-auto flex items-center'>Gönder</button>
        </form>
    </div>
  )
}

export default Contact  