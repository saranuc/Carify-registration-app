import React, { useEffect, useState } from 'react';
import './list.css';
import car from './carify1.png';
import lam from './lamb.jpg';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function List() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [islogged, setisLogged] = useState(false);

  useEffect(() => {
    axios.get("/regis/get").then((res) => {
      setUser(res.data);
    });
  }, []);

  useEffect(()=>{
    const username = localStorage.getItem("username");
    setisLogged(!!username);
    setUsername(username);
  })
  const handleDelete = (id) => {
    axios.delete(`/regis/delete/${id}`).then((res) => {
      // setUser(user.filter((item) => item._id !== id));
      alert("Delete successful");
      window.location.reload(false);
    });
  };
  const handleAdd = () =>{
    navigate("/but");
  }
  const handleUpdate = (id) => {
    navigate(`/u/${username}`);
  }
  const handleInfo = (id) =>{
    navigate(`/s/${username}`)
  }
  const handleLogout = (id)=>{
    localStorage.removeItem("username");
    setisLogged(false);
    navigate("/")
  }

  if(!islogged){
    navigate("/in")
  }

  return (
    <div>
      <div className='wbox'></div>
      <div class="index">
        <img src={car} class="to"></img>
      </div>
      <div class="head">
        <div class="head1">
          <Link to="/">
            <h3>HOME</h3>
          </Link>
        </div>
        <div class="head2">
          <Link to="/gal">
            <h3>ABOUTUS</h3>
          </Link>
        </div>
        <div class="head3">
          <Link to="/list">
            <h3>LIST</h3>
          </Link>
        </div>
        <div class="head4">
            <h3 onClick={handleLogout}>LOGOUT</h3>
        </div>
      </div>
      <div class="hea">LIST OF CUSTOMERS
      </div>
      <div className='uname'>
       <button onClick={handleInfo}> {username}</button>
      </div>
      <div className='useme'>
        <h3>User_Id : </h3>
      </div>

      <button onClick={handleAdd} className='ad'><AiOutlineUserAdd/></button>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Address</th>
            <th>PhoneNo</th>
          
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.username}>
              <td>{item.username}</td>
              <td>{item.address}</td>
              <td>{item.phoneno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}