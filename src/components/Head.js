import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarNavSlice';

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-sm'>
      <div className='flex m-2 col-span-1'>
        <img alt='menu' onClick={()=>toggleMenuHandler()} className='h-9 p-0 m-1 cursor-pointer' src='https://www.svgrepo.com/show/506800/burger-menu.svg'/>
        <a href='/' className='cursor-pointer'><img alt='youtube-logo' className='h-10 mx-2' src='https://blog.logomyway.com/wp-content/uploads/2020/09/youtube-logo2-1.jpg'/></a>
      </div>
      <div className='col-span-10 my-2 pl-32'>
        <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'/>
        <button className='border border-gray-300 p-2 rounded-r-full'>
          Search
        </button>
      </div>
      <div className='col-span-1'>
        <img alt='profile' className='h-16' src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'/>
      </div>
    </div>
  )
}

export default Head