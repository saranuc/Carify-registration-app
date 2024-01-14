import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import './regis.css';
import { Link } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [aadharno, setAadharNo] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [engineno, setEngineNo] = useState('');
  const [regid, setRegistrationId] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/regis/post',{username,aadharno,phoneno,address,engineno,regid});

    // Perform form submission or API call with the form data
    // For simplicity, we'll just log the values to the console
    console.log({
      username,
      aadharno,
      phoneno,
      address,
      engineno,
    });
    navigate("/");

    // Reset form fields
    
  };

  return (
    

    <div className="register-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label>Aadhar Number:</label>
          <input
            type="text"
            value={aadharno}
            onChange={(e) => setAadharNo(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneNo(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label>Engine Number:</label>
          <input
            type="text"
            value={engineno}
            onChange={(e) => setEngineNo(e.target.value)}
            required />
        </div>



        <div className="form-group">
          <label>Registration ID:</label>
          <input
            type="text"
            value={regid}
            onChange={(e) => setRegistrationId(e.target.value)}
            required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className='vet'>
      <Link to="/"><FaWindowClose/></Link>
    </div>
      </div>
    

  );
};

export default RegisterForm;
