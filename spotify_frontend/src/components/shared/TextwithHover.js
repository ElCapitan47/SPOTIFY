import React from 'react'

const TextwithHover = ({displaytext, active}) => {
    return (
      <div className='flex items-center justify-start cursor-pointer'>
        <div className={`${active ? 'text-white': 'text-gray-400'} font-semibold hover:text-white`}>
             {displaytext}
        </div>
      </div>
    )
  }

export default TextwithHover;
