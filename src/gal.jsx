import React from 'react'
import './gal.css'
import car from './carify1.png';
// import x from'./image1.jpg'
import { Link } from 'react-router-dom'

export default function gal() {

  return (
    <div>
       <div>
      
       <div className='wbox'></div>
<div class="index">
  <img src={car} class="to"></img>
</div>
<div class="head">

  <div class="head1">
    <Link to = "/"><h3>HOME</h3></Link>
  </div>
  <div class="head2">
  <Link to = "/gal"><h3>ABOUTUS</h3></Link>
  </div>
  <div class="head3">
  <Link to = "/in"><h3>LIST</h3></Link>
  </div>
  <div class="head4">
  <Link to = "/but"><h3>REGISTER</h3></Link>
  </div>

</div>
    
    <div class="hea">ABOUT US</div>
    <div class="top" style={{color: "#D3AB43"}}>ABOUT OUR COMPANY</div>
    <div class="top2" style={{color: "#000000"}}>FOR ALL YOUR CAR REGISTRATION NEEDS US</div>
   <img src={require("D:/rest/rest/src/us.jpg")} class="log1"alt="rc"/>
    <div class="para">With our Carify Registration page, you can say goodbye to long queues and tedious paperwork. Simply access our user-friendly interface from the comfort of your own device, and complete your registration in just a few easy steps. We have incorporated advanced security measures to ensure the confidentiality and safety of your personal information.</div>
    <div class="para2">
        <ul>
            <li>Better services to Transport Department as well as citizen</li>
            <li>Quick implementation of government policies from time to time</li>
            <li>Experienced & Market Knowledge</li>
            <li>Strong Customer Service</li>
          </ul>
           
    </div>
    <div class="cont"></div>
    <div class="co"></div>
    <div class="cn">About us</div>
    <div className='cn1'>Visit Carify and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the registration of your car a admirirable one.</div>
   
    <div className='cn3'>
     Phone no
     +919942137316
    </div>
    <div className='bvot'>
        <h4>© 2023 Personal Finance Manager. All rights reserved.</h4>
        </div>
    
    <div className='cn5'>
      Mail Address
      octane96@gmail.com
    </div>
    <div className='cn6'>
      Our info
    </div>
    <div className='cn7'>
    <Link to="/">HOME</Link>
    <Link to="/in"style={{top: "1110px"}}>LIST</Link>
    <Link to="/but" style={{top: "1150px"}}>REGISTER</Link>
    </div>
    <div className='c'>Contact us</div>
    </div>
    <div className="nowp">
        <a href="tel: +919942137316">
        <button>CALL NOW!!</button>
        </a>
        </div>
        <div className="wap">
          <a href="https://wa.me/9942137316">
          <button>WHATS APP</button>
          </a>
        </div>
    </div>
  
  );
};

