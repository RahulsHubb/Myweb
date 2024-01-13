import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => { 
  return (
    <header className=' header p-0 bg-yellow-100'>
        <div className='logo'>
            <img src='https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=740&t=st=1693746603~exp=1693747203~hmac=7a87ccf8c7695f12ba3ee07363f06ca38d793c0fcc8eae57f4825b938c4cbe38' alt='logo'/>
        </div>
        <ul className='nav-items'>
            <li className='nav-item hover:bg-yellow-200 hover:text-white rounded overflow-hidden p-3'>
              <Link to="/">Home</Link>
              
            </li>
            <li className='nav-item hover:bg-yellow-200 hover:text-white rounded overflow-hidden p-3'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='nav-item hover:bg-yellow-200 hover:text-white rounded overflow-hidden p-3'>
              <Link to="/about">About</Link>
            </li>
            <li className='nav-item hover:bg-yellow-200 hover:text-white rounded overflow-hidden p-3'>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            
            <li className='nav-item hover:bg-yellow-200 hover:text-white rounded overflow-hidden p-3'>Search</li>
        </ul>
    </header>
  )
}

export default Header