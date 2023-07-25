import React, {useState} from 'react'
import { FaBars, FaTimes,FaYoutube,FaInstagram,FaFacebook} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {

    const[nav,setNav]= useState(false)
    const handleClick=()=>setNav(!nav)

  return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d9de5e] text-gray-600'>
            <div>
                <img src={Logo} alt="logo Image" style={{width:'80px'}} />
            </div>


            {/* Menü */}
            
                <ul className='hidden md:flex'>
                    <li>
                        <Link  to="home"  smooth={true}  duration={500} > 
                        Home
                        </Link>
                    </li>
                    <li>                        
                        <Link  to="about"  smooth={true}  duration={500} > 
                        About
                        </Link>
                    </li>
                    <li>                        
                        <Link  to="products"  smooth={true}  duration={500} > 
                        Products
                        </Link>
                    </li>
                    <li>                        
                        <Link  to="contact"  smooth={true}  duration={500} > 
                        Contact
                        </Link>
                    </li>
                </ul>
            


            {/* hamburger */}
             <div onClick={handleClick} className='md:hidden z-20'>
                {!nav ? <FaBars/>  : <FaTimes/>}
             </div>

            {/* mobile menü */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#d6b286] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home"  smooth={true}  duration={500} > 
                        Home
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about"  smooth={true}  duration={500} > 
                        About
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="products"  smooth={true}  duration={500} > 
                        Products
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} > 
                        Contact
                    </Link></li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>    
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-200'>
                    <a className='flex justify-between items-center w-full text-gray-700'
                     href="/">
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-300'>
                    <a className='flex justify-between items-center w-full text-gray-700'
                     href="/">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-400'>
                    <a className='flex justify-between items-center w-full text-gray-700'
                     href="/">
                        Youtube <FaYoutube size={30}/>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar