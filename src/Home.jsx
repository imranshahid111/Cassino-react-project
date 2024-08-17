import React, { useState } from 'react'
import Navbar from './Navbar'
import { toast, ToastContainer } from 'react-toastify';
import Right from './Right';
import { useLocation } from 'react-router-dom';


export default function Home() {
  const location = useLocation();
  const { dats } = location.state || {};
  let [guessNum, setGuessNum] = useState();
  let names = dats?.Name;
  let initialBalance = dats?.Balance || 1000;
  let [Balance, setBalance] = useState(initialBalance);
  let [payment, setpayment] = useState();

  let Number = (v) => {
    payment = v;
    setpayment(payment);

  }
  // console.log(payment);
  let Guess = (event) => {
    let bal = payment;
    let n;
    let num = Math.floor(Math.random() * 10 + 1);
    guessNum = num;
    setGuessNum(guessNum);
    let hi = parseInt(event.target.inp.value);
    if (Balance > 0 && !isNaN(bal)) {
      if (!hi) {
        toast.error("Please fill field.");
        event.preventDefault();
        return;
      }
      
      if (hi === guessNum) {
        toast.success("Value Matched");
        n = Balance + (bal * 2);
        setBalance(n);
        event.target.inp.value = '';
      }
      else {
        toast.error("Try again..");
        event.target.inp.value = '';
        n = Balance - bal;
        setBalance(n);
        console.log(Balance);

      }
    } else {
      toast.error("low Balance");
    }
    event.preventDefault();
  };
  return (
    <>
      <div className='flex'>
        <div className='w-[60%]    poppins_thin'>
        <Navbar />
          
            
          

          <div className='flex m-auto justify-end poppins_thin'>
            <div>
            
              <h1 className='text-[32px] w-[350px] '>Get Started Now</h1>
              <h1 className={`${(dats === undefined) ? 'hidden' : ''} text-[24px]`}>Wellcome <span className='text-red-600 font-extrabold'>{names}</span>  </h1>
              <div className=''>
                <h1 className={`${(dats === undefined) ? 'hidden' : 'text-blue-700'} text-[16px] font-medium`}>Your Balance is : {Balance}</h1>
                <h1 className='text-[18px] mt-3 '>Select your playing amount</h1>
                <button onClick={() => Number(100)} class={` mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm  text-gray-900 rounded-lg group bg-gradient-to-br font-semibold from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800`}>
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    100
                  </span>
                </button>
                <button onClick={() => Number(200)} class="ml-3 mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm  text-gray-900 rounded-lg group bg-gradient-to-br font-semibold from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    200
                  </span>
                </button>
                <button onClick={() => Number(500)} class="ml-3 mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm  text-gray-900 rounded-lg group bg-gradient-to-br font-semibold from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    500
                  </span>
                </button></div>
              <h1 className='mt-16'>Enter your guessed number </h1>
              <form onSubmit={Guess}>
                <input name='inp' className='border border-[#D9D9D9] w-full rounded-md h-8 text-[11px] px-2 ' type="number" max={10} />
                <button className='bg-[#3A5B22] w-full rounded-md h-8 mt-5 text-[#FFFFFF] text-[13px]'>Enter</button>
              </form>
              <div className='mt-10'><label className='text-[20px] font-semibold text-green-950'>Actual Number is : </label><input className="text-[22px] text-red-600 font-semibold" type='number' value={guessNum} /></div>
            </div>



          </div>
        </div>
        <Right />
      </div>
      <ToastContainer />
    </>
  )
}
