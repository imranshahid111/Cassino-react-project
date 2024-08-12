import React, { useState } from 'react'
import myimage from './images/chris-lee-70l1tDAI6rM-unsplash 2.png';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Right from './Right';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    let [store,setstore]=useState([]);
    let naviagate = useNavigate();
    let [data,setdata]=useState({
        Name:'',
        Email:'',
        Password:'',
        Balance:1000
    });
    let getvalue=(event)=>{
        let oldData={...data}
       let inputName=event.target.name;
       let inputValue=event.target.value;
       
        
        oldData[inputName]=inputValue;
        setdata(oldData);
    }
      let HandleSubmit=(event)=>{
        let currentData={
            Name:data.Name,
            Email:data.Email,
            Password:data.Password,
            Balance:data.Balance=1000
        };
        let formfilter = store.filter((v)=> v.Email=== data.Email)
        if(formfilter.length >= 1)
        {
          toast.error("Email already exist");
          event.preventDefault();
          }
        else{
        let oldRecord = [...store,currentData];
        setstore(oldRecord);
        let base = oldRecord;
        localStorage.setItem(`${currentData.Email}`,JSON.stringify(base));
        naviagate('/login');
        event.preventDefault();
      }}
  return (
    <>
      <div className='flex'>
      <div className='w-[60%] flex m-auto justify-end poppins_thin'>
        <div>
         
        <h1 className='text-[32px] w-[350px] '>Get Started Now</h1>
        <form onSubmit={HandleSubmit} className='pt-7' >
          <label className='block text-[14px] pt-5 w-full'>Name</label>
          <input className='border border-[#D9D9D9] w-full rounded-md h-8 text-[11px] px-2' name='Name' onChange={getvalue} value={data.Name} autoComplete='off'  type='text' placeholder='Enter your name' />
          
          <label className='block text-[14px] pt-5 w-full'>Username</label>
          <input className='border border-[#D9D9D9] w-full rounded-md h-8 text-[11px] px-2 ' name='Email' onChange={getvalue} value={data.Email} autoComplete='off' placeholder='Enter your username' type='text' />
          <label className='block text-[14px] pt-5 w-full'>Password</label>
          <input className='border border-[#D9D9D9] w-full rounded-md h-8 text-[11px] px-2' name='Password' onChange={getvalue} value={data.Password} autoComplete='off' type='password' placeholder='XXXXXXX' /><br/>
          <span className='inline-block pt-5 space-x-2 align-bottom'><input type='checkbox' className=''/><span className='text-[11px] '>I agree to the <span className='underline'>terms & policy</span></span></span><br/>
        <button className='bg-[#3A5B22] w-full rounded-md h-8 mt-5 text-[#FFFFFF] text-[13px]'>Signup</button>
        </form>
        </div>
      </div>
     
  
    <ToastContainer/>
    <Right/>
    </div>
  </>
)
}
