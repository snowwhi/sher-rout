import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <header>
        <ul>
            <li><Link to='/' >home </Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        
        </ul>
    </header>
  )
}

export default Nav