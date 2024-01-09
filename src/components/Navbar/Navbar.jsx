import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="OneBigBox"><div className="leftbox"><img src='/assets/bmwlogo.png' className='logo'/></div>
    <div className="rightbox"><div className='onebox'>Home</div>
<div className='onebox'>Showcase</div>
<div className='onebox'>About</div>
<div className='onebox'>Contact</div></div>
    </div>
  )
}
export default Navbar