import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> refs/remotes/origin/main

const Header = () => {
  return (
    <header className=' header'>
        <div className='logo'>
            <img src='https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=740&t=st=1693746603~exp=1693747203~hmac=7a87ccf8c7695f12ba3ee07363f06ca38d793c0fcc8eae57f4825b938c4cbe38' alt='logo'/>
        </div>
        <ul className='nav-items'>
<<<<<<< HEAD
            <li className='nav-item'>
              <Link to="/">Home</Link>
              
            </li>
            <li className='nav-item'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about">About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/restaurants">Restaurants</Link>
            </li>
=======
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Contact</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>More</li>
>>>>>>> refs/remotes/origin/main
            <li className='nav-item'>Search</li>
        </ul>
    </header>
  )
}

export default Header