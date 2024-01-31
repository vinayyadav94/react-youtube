import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarNavSlice';
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    //make an api call after every key press
    //but if the difference between  2 api calls is <200 ms
    //decline the api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    //const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    //const res = await data.json();
    //const json = res === "" ? {} : JSON.parse(res);
    //console.log(res);
    const params = new URLSearchParams({
      key: GOOGLE_API_KEY,
      q: searchQuery,
    });
    const url = `${YOUTUBE_SEARCH_API}?${params}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

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
        <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
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