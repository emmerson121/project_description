import React, { useState } from 'react'
import './styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const [toggle, setToggle] = useState(true);
  return (
    <div>
       <header>
                <div className="container headerNav">
                   <div id="branding">
                       <div className='web'><span className="hightlight">Emmerson</span> Web Development</div>
                       <div className='logo'>
                          Emmerson
                       </div>
                       </div>
                   
               <nav>
                <div  className='menu'> <FontAwesomeIcon onClick={() => setToggle(!toggle)} className='aweSome' icon={faBars} /></div>
                  <ul className='uL'>
         <li className="current"><a href="/">Home</a></li>
         <li> <a href="/about">About Us</a></li>
         <li> <a href="/services">Services</a></li>
                       </ul>
                   </nav>
                   </div>
            </header>


{!toggle ? 
            <div className='wor'>
            <div className='row'>
              <div className='row1'> 
                <div className='font'> <div><FontAwesomeIcon onClick={() => setToggle(true)} className='fy' icon={faXmark} /></div></div>
                <div><a className='wh' href='/'>Home</a></div>
                <div><a className='wh' href='/about'>About Us</a></div>
                <div><a className='wh' href='/services'>Services</a></div>
              </div>
            </div>
            </div>
            : '' }

    </div>
  )
}

export default NavBar
