import React, { useState } from 'react'
import './nav_style.css'
import { Link, NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { assets } from '../../assets/assets'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'




const Navbar = () => {
    let [showMenue,setShow]=useState(false);
    
    const links= [
        {to:'/', val:'home'},
        {to:'/projects', val:'projects'},
        {to:'/about', val:'about'},
    ]

    return (
        <header>
            <div className="container">
                <NavLink to={'/'} className="logo" onClick={()=> setShow(false)}>
                    <img src={assets.whiteLogo} alt="logo" loading='lazy'/>
                </NavLink>

                <nav>
                    <ul className={`pageLinks ${showMenue? 'left-[0%]' : 'left-[100%] overflow-hidden'}`} >
                        {
                            links.map((l,i)=>
                            <li key={i}><NavLink to={l.to} className={({ isActive }) => isActive ? "active" : ""} onClick={()=> setShow(false)}>{l.val}</NavLink></li>
                            )
                        }
                    </ul>
                    {showMenue ? <FontAwesomeIcon className='bars' icon={faXmark} onClick={()=> setShow(!showMenue)}/> :
                    <FontAwesomeIcon icon={faBars} className='bars' onClick={()=> setShow(!showMenue)}/> }
                </nav>
            </div>
        </header>
    )
}

export default Navbar
