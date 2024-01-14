import React from 'react';
import hell from './final.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import './login.css';
import { useState } from 'react';
export default function Landing()
{
  const[username,setUser]=useState([]);
  const[password,setPassword]=useState([]);
  const navigate = useNavigate();

  const handlesubmit = async (e)=>{
    e.preventDefault();
    const response = await axios.post('/api/post',{username,password});
    if(response.data === "Login successful") 
    {
      sessionStorage.setItem("username", username);
      localStorage.setItem("username", username);
      navigate("/list");
    }
    else{
      alert(response.data);
    }
   

  }
  return(
    <div>
      
          <div>
          <img src={hell} class = "logo" />
          </div>
          <div class="pa">
          </div>
           <div className='wel'>
        <h1>CARIFY</h1>
      </div>
      <div className='loginb'>
        <h2>Sign In</h2>
        <h5>The key to happiness is to sign in.</h5>
      </div>
      <div className='user'>
        <h3>Username:</h3>
      </div>
      <div >
        <input type={"Text"} name="QWE" id='jk89' placeholder='  Enter Username' onChange={e=>setUser(e.target.value)} required></input>
      </div>
      <div className='pass'>
        <h3>Password:</h3>
      </div>
      <div>
        <input type={'password'} name="QWY" id='jj89' placeholder='  Enter Password ' onChange={e=>setPassword(e.target.value)} required></input>
      </div>
      <div className='si'>
      <Link to="/list"style={{top:"480px",left:"230px"}} onClick={handlesubmit}>LOGIN</Link>
        </div>
    <div className='si'>
          <Link to="/up" style={{top:"540px",left:"310px"}}>SIGN UP</Link>
    </div>
    <div className='fi'>
      <h5>Don't have an account?</h5>
    </div>
    <div className='ret'>
      <Link to="/"><FaWindowClose/></Link>
    </div>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
        </div>  

    )
}
