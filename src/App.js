import logo from './logo.svg';
import './App.css';

import Signup from './Signup';
import Login from './Login';
import Table from './Table';
import LoginSignup from './LoginSignup';
import Right from './Right';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rules from './Rules';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
    {/* <Signup/>
    
    <div className='flex'><LoginSignup/><Right/></div>
  
    <div className='flex'><Signup/><Right/></div> 
    <Table/>
    <div className='flex'><Home/><Right/></div>
    <div className='flex'><Login/><Right/></div> */}
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginSignup/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/rules' element={<Rules/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
   
    
        </>
  );
}

export default App;
