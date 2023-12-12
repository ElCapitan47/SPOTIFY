import React from 'react'
import { Icon } from '@iconify/react';
import { useCookies } from 'react-cookie';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';

const SignUpComponent = () => {
  //Storing data that is inputted in signup form in useState variables
  const [email,setEmail]= useState('');
  const [confirmEmail,setConfirmEmail]= useState('');
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');
  const [firstName,setfirstname]= useState('');
  const [lastName,setlastname]= useState('');
  //We use Cookies to store the beare jwt token generated for each user who signs up. Token is stored in cookie for a period of 30 days
  //after which it gets erased
  const [cookie,setCookie]= useCookies(["token"]);
  const navigate = useNavigate();

  //This function is called when we click on Sign Up button
  const signUp=async()=>{
    if(email!=confirmEmail)
    {
      alert('Email and Confirm Email must match');
      return;
    }
    const data={email,password,username,firstName,lastName};
    // console.log(data);
    const response= await makeUnauthenticatedPOSTRequest('/auth/register',data);
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
      <div className='w-full h-full flex flex-col items-center bg-app-black text-white overflow-auto'>
        <div className="p-5 border-b border-solid border-black w-full flex justify-center bg-black">
            <Icon icon="logos:spotify"  width='150'/>
        </div>
        
        <div className='w-1/3 py-10 flex items-center justify-center flex-col'> 
            <div className='font-bold mb-4 text-3xl'> Sign Up to start listening</div>
            <div className='h-full'>
              <TextInput label='Email' placeholder='Enter email address' className='my-6' value={email} setValue={setEmail}/>
              <TextInput label='Confirm Email' placeholder='Enter email address' className='mb-6' value={confirmEmail} setValue={setConfirmEmail}/>
              <TextInput label='UserName' placeholder='Enter username' className='mb-6' value={username} setValue={setUsername}/>
              <PasswordInput label='Create Password' placeholder='Enter password' value={password} setValue={setPassword}/>
              <div className='w-full flex justify-between items center space-x-8'>
                <TextInput label='First Name' placeholder='Enter firstname' className='my-6' value={firstName} setValue={setfirstname}/>
                <TextInput label='Last Name' placeholder='Enter lastname' className='my-6' value={lastName} setValue={setlastname}/>
              </div>
              
              <div className='w-full flex items-center justify-center my-8'>
                  <button className='bg-green-500 rounded-full font-semibold p-3 px-10 text-black' onClick={(e)=>{e.preventDefault(); signUp()}}> SIGN UP </button>
              </div>
              <div className='w-full border border-solid border-black'>
              </div>
              <div className='my-6 font-semibold text-lg'>
              Already have an account?
              </div>
              <div className='border border-solid border-white rounded-full p-2 w-full flex items-center justify-center text-white font-bold'>
              <Link to={'/login'}>
              Log in to Spotify
              </Link>
              
              </div>

            </div>
            
            
        </div>

    </div>
  )
}

export default SignUpComponent;
