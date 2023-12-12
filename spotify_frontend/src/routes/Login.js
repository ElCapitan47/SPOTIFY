import React from 'react'
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';

const LoginComponent = () => {

  const [email,setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [cookie, setCookie]= useCookies(["token"]);
  const navigate= useNavigate();
  const login=async()=>{
    
    const data={email,password};
    // console.log(data);
    const response= await makeUnauthenticatedPOSTRequest('/auth/login',data);
    //we have used /auth/register as api for signp in spotify.backend file
    //So this calls the fetch api for this /auth/register endpoint and the router.post method of backend gets triggered and the data gets posted in the database
    if(response && !response.err)
    {
      console.log(response);
      const token= response.token;
      const date= new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token",token,{path:'/', expires: date});
      alert("Success");
      navigate("/home");
    }
    else
    {
      alert("Failure");
    }

  }


  return (
    <div className='w-full h-full flex flex-col items-center bg-app-black text-white'>
      <div className="p-5 border-b border-solid border-white w-full flex justify-center bg-black">
          <Icon icon="logos:spotify"  width='150'/>
      </div>
     
      <div className='w-1/2 py-10 flex items-center justify-center flex-col bg-black p-8 mt-10 rounded-md h-full'> 
         <div className='font-bold mb-4 text-3xl'> Log In to Spotify</div>
         <div className='w-3/5'>
          <TextInput label='Email ID or Username' placeholder='Enter email address or username' className='my-6 'value={email} setValue={setEmail} />
          <PasswordInput label='Password' placeholder='Enter password' value={password} setValue={setPassword}/>
          <div className='w-full flex items-center justify-end my-8'>
              <button className='bg-green-500 rounded-full font-semibold p-3 px-10 text-black' onClick={(e)=>{e.preventDefault(); login()} }> LOG IN </button>
          </div>
          <div className='w-full border border-solid border-white'>
          </div>
          <div className='my-6 font-semibold text-lg'>
            Don't have an account?
          </div>
          <div className='border border-solid border-white rounded-full p-2 w-full flex items-center justify-center text-white font-bold'>
          <Link to={'/signup'}>
          SIGN UP FOR SPOTIFY
          </Link>
            
          </div>

         </div>
        
         
      </div>

    </div>
  )
}

export default LoginComponent;
