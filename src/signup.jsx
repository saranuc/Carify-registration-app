import React from 'react'
import axios from 'axios';
import "./signup.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const[username,setUser]= useState([]);
  const[password,setPassword]= useState([]);
  const[email,setemail]= useState([]);
  const[dateofbirth,setdob]= useState([]);
  const[phoneno,setpno]= useState([]);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/signup/post',{username,password,email,dateofbirth,phoneno});
    axios.post('/post',{username,password});
    console.log({username,password,email,dateofbirth,phoneno})
    navigate("/");
    }

  return (
    <div>
    <div className="container">
 <div className="login-form">
        <div className="title">SIGN UP FORM</div>
        
        <div className="form">
      <form onSubmit={handleSubmit} >
          <label>Name: </label>
        <div className="input-container">
          <input type="text" name="uname"  onChange={e=>setUser(e.target.value)}required />
         
        </div>
            <label>Email Id:</label>
        <div className='input-container'>
            <input type="text" name="email" onChange={e=>setemail(e.target.value)}required />
        </div>
          <label>Password: </label>
        <div className="input-container">
          <input type="password" name="pass" onChange={e=>setPassword(e.target.value)} required />
       
        </div>
            <label>Date Of Birth:</label>
        <div className='input-container'>
            <input type="text" name="dob" onChange={e=>setdob(e.target.value)} required />
        </div>
            <label>Phone No:</label>
        <div className='input-container'>
            <input type="text" name="phno" onChange={e=>setpno(e.target.value)}required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}
