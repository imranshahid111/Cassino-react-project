import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Home from './Home';
import Right from './Right';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  
  let [inputValue, setInputValue] = useState('');
  let [inputpass, setInputpass] = useState('');
  let [dats,setdats]= useState(null);
  const navigate = useNavigate();
  let handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  let handlePassChange = (event) => {
    setInputpass(event.target.value);
  };

  
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue || !inputpass) {
      toast.error("Please fill in all fields.");
      return; 
  }
  
   let datstring = localStorage.getItem(inputValue);
   if(datstring === null )
   {
    toast.error("Invalid UserName");
   }else{
  
   let dataobject = JSON.parse(datstring);
  dats = (dataobject[0]);

    if(inputpass === dats.Password)
    {
      toast.success("Wellcome");
      setdats(dats);
      navigate('/home',{state:{dats}});
    }else{
      toast.error("Wrong Password");
    }}
  };

 

  return (
    <>
          {/* <Home dats={dats} /> */}
          <div className='flex'>
      <div className='w-[60%] flex m-auto justify-end  poppins_thin'>
        <div>
        <h1 className='text-[32px] w-[350px] '>Welcome back!</h1>
        <h1 className='text-[14px]'>Enter your Credentials to access your account</h1>
        <form className='pt-7' onSubmit={HandleSubmit}>
          <label className='block text-[14px] pt-5 w-full' >Username</label>
          <input value={inputValue} onChange={handleInputChange} className='border border-[#D9D9D9] w-full rounded-md h-8 text-[11px] px-2 ' placeholder='Enter your username' autoComplete='off' type='text' name='LName' />
          <div className='flex justify-between'><label className='block text-[14px] pt-5 '>Password</label><label className='pt-6 text-[10px] text-[#0C2A92]'>forgot password </label></div>
          <input value={inputpass} onChange={handlePassChange} className='border border-[#D9D9D9] w-full rounded-md h-8 text-[11px] px-2'  type='password' placeholder='XXXXXXX' name='LPass'/><br/>
          <span className='inline-block pt-5 space-x-2 align-bottom'><input type='checkbox' className=''/><span className='text-[11px] '>Remember for 30 days</span></span><br/>
        <button className='bg-[#3A5B22] w-full rounded-md h-8 mt-5 text-[#FFFFFF] text-[13px]'>Login</button>
        </form>
        </div>
     
     
    </div>
    <Right/>
    </div>
    <ToastContainer/>
  </>
)
}
