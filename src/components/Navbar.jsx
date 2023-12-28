import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../pages/home/assests/logo.png'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-transparent" style={{ margin: '15px 0' }}>
      <div className="container-fluid  align-items-center">
        <a className="navbar-brand" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <img src={logo} className="profile" ></img> <span className='logoname' style={{fontFamily:"sunflower",color:"#32315b"}}> S. B. Jajoo & Co.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="ok" ><FaPhoneAlt style={{marginTop:"-7px"}}/></span>
        </button>
        <div className="hi collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="tel: +919323023933"
                style={{ fontFamily: 'sunflower', color: '#32315b', marginRight: '10px' }}
              >
               <FaPhoneAlt style={{color :"#6c76f2",fontSize:"1.3rem"}}/><span className="display"style={{fontWeight:"lighter",fontFamily:"poppins",letterSpacing:"-1px"}}>{""}  Talk to us :</span> + 91 9323023933
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#" style={{ marginRight: '15px' }}>
                Link
              </a>
            </li> */}

            {/* <li className="nav-item"></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
