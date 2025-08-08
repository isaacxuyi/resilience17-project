import React from 'react'
import Image from 'next/image'



const Navbar = () => {
  return (
    <div className='navbar custom-container'>
        <div className="left-nav">
       <img src='/Icons/Hamburger-menu.svg' alt="Hamburger menu" height={12} width={18} id='hamburgerMenu' />
      <img src='/Icons/Logo.svg'  alt="logo" height={32} width={100} />
        </div>
    <div className="right-nav">
        <img src="Icons/search.svg"  alt="search" height={20} width={50} id='oth2' />
        <img  src='Icons/menu.svg'  height={18}width={18} id='oth2' />
        <img src='Icons/profile-picture.png'  height={40} width={40}/>
    </div>
     
    </div>
  )
}

export default Navbar
