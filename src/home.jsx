import React from 'react'
import './home.css';
import car from './carify1.png';
import lam from './i1.jpg';
import iam from './i2.jpg';
import vam from './i3.jpg';
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
// import sample from 'saamy.mov';
export default function home() {
  return (
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
<div class="best">CARIFY REGISTRATION</div>
<div class="lux">|    BEST ONLINE CAR REGISTRATION</div>

    <div>
    <div class="conth"></div>
    <div class="coh"></div>
      <div class="cnh">About Us</div>
    <div className='cn1h'>Visit Carify and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the registration of your car a admirirable one.</div>
   
    <div className='cn3h'>
     Phone no:
     +919842192955
    </div>
   
    <div className='cn4h'>
      Mail Address:
      carify32@gmail.com
    </div>
    <div className='cn6h'>
      Follow Us On
     <div className='cn7h'>
     <Link to ="https://www.youtube.com/watch?v=veywL1iEJY0" style={{top: "100px",width:"110px"}} ><FaYoutube/></Link>
      <Link to ="https://www.instagram.com/?hl=en" style={{top: "180px",width:"110px"}} ><BsInstagram/></Link>
      <Link to ="https://twitter.com/?lang=en-in" style={{top: "260px",width:"110px"}} ><BsTwitter/></Link>
      </div> 
    </div>
    <div className='ch'>Contact us</div>
    <div className='cn8h'>
      <img src={lam} alt="img"></img>
    </div>
    <div className='cn9h'>
      <img src={iam} ></img>
    </div>
    <div className='cn10h'>
      <img src={vam}></img>
    </div>
    <div className="now">
        <a href="tel: +919942137316">
        <button>CALL NOW!!</button>
        </a>
        </div>
    </div>
    <div className="wa">
          <a href="https://wa.me/9942137316">
          <button>WHATS APP</button>
          </a>
        </div>
        <div className='bot'>
        <h4>© 2023 Personal Finance Manager. All rights reserved.</h4>
        </div>
        <div className='tax'>
          <h2>Low Cost GST</h2>
        </div>
        <div className='vax'>
          <h2>Friendly Service</h2>
        </div>
        <div className='bax'>
          <h2>Data Security</h2>
        </div>
        <div className='ds'>
          <p>
          From 1st January 2022, CBIC made the aadhaar authentication mandatory to apply for revocation of cancelled GST registration under the CGST Rule 23 in REG-21.
          </p>
        </div>
        <div className='fs'>
          <p>We provide clear and concise instructions to guide you through the registration process. Step-by-step guidance ensures that you understand each stage and can complete the process seamlessly.</p>
        </div>
        <div className='gs'>
        <p> We implement secure authentication mechanisms to verify the identity of users accessing the website.</p>
        </div>
        
      
     </div>
  )
}
