import React from 'react'
import {Link} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const Nav = () => {
  return (
    <header className='w-full h-10 sticky top-0'>
       <div  className=" h-20 absolute top-0 left-0 w-80 -bg-linear-0 from-rose-600 to-white" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
       ></div>
        
        <div>
            <ul className='flex flex-wrap bg-rose-600 text-white py-1 font-bold  gap-10 justify-end pr-20'>
                <li className='flex gap-1'>
                    <i class="ri-phone-fill"></i>
                    <h3>0300-456787</h3> 
                </li>
                <li className='flex gap-1'>
                    <i class="ri-mail-fill"></i>
                   <h3>khadijahanif890@gmail.com</h3> 
                </li>
                <li className="relative flex items-stretch">
         <select className='bg-gray-700 text-xl  px-4 py-0 cursor-pointer outline-none h-full' id="location" name="location">
             <option value="apple">Franchies:</option>
       <option value="apple">Bhakakr</option>
        <option value="banana" selected>Lahore</option>
       <option value="cherry">Grave</option>
           </select>

                </li>
                <li className='text-xl font-bold'><i class="ri-facebook-fill"></i></li>
                <li className='text-xl font-bold'><i class="ri-github-fill"></i></li>
                <li className='text-xl font-bold'><i class="ri-youtube-fill"></i></li>
            </ul>
        </div>
        <div className='z-100'>

        <ul className='flex flex-wrap white text-gray-500 py-4 font-bold gap-10 justify-end pr-20'>
            <li><Link to='/' >Home </Link></li>
            <li><Link to='/contact'>Contact</Link></li>
         <li><Link to='/Classes'>Classes</Link></li>
          <li><Link to='/Event'>Events</Link></li>
           <li><Link to='/Memebership'>Memebership</Link></li>
            <li><Link to='/Resources'>Resources</Link></li>
             <li><Link to='/Donate'>Donate</Link></li>
        </ul>
        </div>
    </header>
  )
}

export default Nav