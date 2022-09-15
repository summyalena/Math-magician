/* eslint-disable */

import React from 'react'
import {Link} from 'react-router-dom'
import {MenuOutlined} from '@material-ui/icons'
import './headers.css';
import { useState } from 'react';
import {Close} from '@material-ui/icons'

function Headers() {
    const [active, setActive] = useState(false);

    const showMenu = () => {
       setActive(!active) 
    }


  return (
    <div className='header'>
        <h2>Math Magicians</h2>
        <div className='menu-icon'>
            <MenuOutlined className="menu" onClick={showMenu} />
        </div>

      <nav className={active ? 'slider active' : 'slider'}>
        <ul>
            <div className='closed'>
              <Close className='close' onClick={showMenu}/>  
            </div>
            <li>
             <Link to='/'> Home</Link>
            </li>
            <li>
             <Link to='/calculator'> Calculator</Link>
            </li>
            <li>
             <Link to='/quote'>Quote</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Headers