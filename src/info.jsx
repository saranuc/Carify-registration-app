import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./info.css"
import { useState ,useEffect} from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Info() {
    const [user, setUser] = useState([]);
    const {username} = useParams();
    const [name, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/regis/getdata/${username}`).then((res) => {
          setUser(res.data);
          console.log(res.data);
        });
      }, []);
      const handleUpdate = (id) => {
        navigate(`/u/${id}`);
      }
      const handleDelete = (id) => {
        axios.delete(`/regis/delete/${id}`).then((res) => {
          // setUser(user.filter((item) => item._id !== id));
          alert("Delete successful");
          window.location.reload(false);
        });
      };
  return (
    <div>
        <div className='pro'>
            <h2>MY Profile</h2>
        </div>
        <div className='bet'>
      <Link to="/list"><FaWindowClose/></Link>
    </div>
<table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Aadhar No</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>Engine No</th>
            <th>Registration Id</th>
            <th>Actions</th> 
       
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>{user.username}</td>
              <td>{user.aadharno}</td>
              <td>{user.phoneno}</td>
              <td>{user.address}</td>
              <td>{user.engineno}</td>
              <td>{user.regid}</td>
              <td>
                <button onClick={() => handleDelete(user.username)} className='dele'><AiTwotoneDelete/></button>
                {/* <div className='edi'> */}
                <button  onClick={()=>handleUpdate(user.username)} className='edi'><AiOutlineEdit/></button>
                {/* </div> */}
              </td>
            </tr>
       
        </tbody>
      </table>
      
    </div>
  )
}
