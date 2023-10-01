import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store)=>store.sidebarNav.isMenuOpen);
  
  //early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='px-5 mx-5 w-48'>
      <ul>
        <li className='py-2'><Link to='/'>Home</Link></li>
        <li className='py-2'>Shorts</li>
        <li className='py-2'>Subscriptions</li>
      </ul>
      <hr className='mt-2'/>
      <ul>
        <li className='py-2'>Library</li>
        <li className='py-2'>History</li>
        <li className='py-2'>Your Videos</li>
        <li className='py-2'>Watch Later</li>
        <li className='py-2'>Liked Videos</li>
        <li className='py-2'>Show More</li>
      </ul>
    </div>
  )
}

export default Sidebar