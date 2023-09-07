import React from 'react';

const Header = () => {
  return (
    <header className=' header'>
        <div className='logo'>
            <img src='https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=740&t=st=1693746603~exp=1693747203~hmac=7a87ccf8c7695f12ba3ee07363f06ca38d793c0fcc8eae57f4825b938c4cbe38' alt='logo'/>
        </div>
        <ul className='nav-items'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Contact</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>More</li>
            <li className='nav-item'>Search</li>
        </ul>
    </header>
  )
}

export default Header