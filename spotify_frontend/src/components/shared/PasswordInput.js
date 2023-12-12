import React from 'react'

const PasswordInput = ({label,placeholder, value, setValue}) => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
        <label for={label} className='font-semibold'>{label}</label>
        <input type='password' placeholder={placeholder} 
        className='p-2 border border-gray-400 border-solid rounded placeholder-white bg-app-black'
         id={label}
         value={value}
         onChange={(e)=>{setValue(e.target.value)}}></input>
        
    </div>
   
  )
}

export default PasswordInput;
