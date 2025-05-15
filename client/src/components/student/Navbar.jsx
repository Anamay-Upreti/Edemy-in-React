import React from 'react'
import { assets } from '../../assets'
const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer'/>
      <div></div>
    </div>
  )
}

export default Navbar