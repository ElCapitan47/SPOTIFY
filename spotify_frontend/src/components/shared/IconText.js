import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const IconText = ({iconname, displaytext, active, targetLink, onClick}) => {
  return (
    <Link to={targetLink} className='block'>
      <div className='flex items-center justify-start cursor-pointer' onClick={onClick}>
          {/* For Icon */}
        <div className='px-5 py-2'>
            <Icon icon={iconname} fontSize={30} color={active? 'white': 'gray'}></Icon>
        </div>
        {/* For Corresponding text */}
        <div className={`${active ? 'text-white': 'text-gray-400'} font-semibold hover:text-white`}>
            {displaytext}
        </div>
      </div>
    </Link>
    
  )
}

export default IconText;
