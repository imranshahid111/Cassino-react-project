import React, { useState } from 'react'
import myimage from './images/chris-lee-70l1tDAI6rM-unsplash 2.png';
import { ToastContainer } from 'react-toastify';
import Right from './Right';
import { Link } from 'react-router-dom';
import Login from './Login';
export default function LoginSignup() {
  let handle = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <div className='flex'>
        <div className='w-[60%] flex m-auto justify-end poppins_thin'>
          <div>
            <h1 className='text-[32px] w-[350px] '>Welcome</h1>
            <h1 className='text-[14px]'>Select login or signup </h1>
            <form className='pt-7' onSubmit={handle}>
              <div className='space-y-3'>
                <Link to="/login">
                  <button className='bg-[#3A5B22] w-full rounded-md h-8 mt-5 text-[#FFFFFF] text-[13px]'  >
                    Login
                  </button>
                </Link>
                <div className='flex justify-center text-center text-[12px]'>or</div>
                <Link to="/signup"><button className='bg-[#3A5B22] w-full rounded-md h-8  text-[#FFFFFF] text-[13px]'>Signup</button></Link>
              </div>
            </form>
          </div>
        </div>
        <Right />
      </div>
      <ToastContainer />
    </>
  )
}
