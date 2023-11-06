import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => (
    <div>
        <nav className="flex items-center h-20 py-6 px-7 bg-black">
            <img src={logo} className='h-9 mr-1.5' alt='logo-img'/>
            <h3 className='text-green mr-auto font-bold text-xl'>ReactFacts</h3>
            <h4 className='text-white font-normal mr-0'>Project 1</h4>
        </nav>
    </div>
)
export default Navbar;