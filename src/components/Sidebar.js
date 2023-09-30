import React from 'react'

const Sidebar = () => {
  return (
    <div className='px-5 mx-5 w-48'>
      <ul>
        <li className='py-2'>Home</li>
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