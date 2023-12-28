import React, { useState } from 'react'
// import sunflower from './sunflower.otf'
import "./style.css"
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import blob from './assests/blob.svg'
import invoice from './assests/Invoice.svg'
import management from './assests/Management.svg'
import accounting from './assests/accountinng.svg'
import arrow from'./assests/Vector4.svg'
import pie from './assests/Vector1.svg'
import pie2 from './assests/Vector.svg'
import vector2 from './assests/Vector3.svg'
import arrow10 from './assests/Arrow10.svg'
import star1 from './assests/Stars1.svg'
import arrow3 from './assests/Arrow3.svg'
import { CiCalendar } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { GoLaw } from "react-icons/go";
  export default function Home() {
    const[click1,Setclick1]=useState(false)
    const[click2,Setclick2]=useState(false)
    const[click3,Setclick3]=useState(false)
    const[click4,Setclick4]=useState(false)
    return (<>
        <div className='home-container' style={{position:"relative"}}>
        <img className="arrow1" src={arrow10} alt="" style={{position:"absolute",opacity:"30%",bottom:"-130px",right:"0px"}}/>
       <div className="flexup"><div className='home-content-top-title' ><span >Chartered Accounting </span>   Agency</div>
      <div className='home-content-top' style={{fontFamily:"Sunflower",fontWeight:"bold"}}>
      <p className='p1'>Strategic Financial Solutions Tailored to Elevate Your <br /> Success.</p>
      <img className='home-image' src={blob} alt="profile" />
      </div></div >
      <div className='home-content-below-title' >We Help you Manage your Finances and Taxes in your Business</div>
     <div className="buttons">
      <button className='btn btn1'>Make an Appointment</button>
      <button className='btn btn2'>Online Meet</button>
      </div>
      <div className='home-content-below-title2' style={{fontSize:"2vh",color:"#b3b0ca",fontFamily:"poppins"}} >*Request will be Queued</div>
      
      </div>
      <div className="company">
        <p className='p2'>Trusted by <span style={{color:"#6c76f2"}} > 100 + </span>Great Companies Worldwide</p>
      <div className="block-companies">
        <div className="comapanies">Lyra</div> <span className='slash' style={{color:"#6c76f2"}}>|</span>
        <div className="comapanies">CM Securities</div><span className='slash' style={{color:"#6c76f2"}}>|</span>
        <div className="comapanies">Balaji Tanks & Vessels</div><span className='slash' style={{color:"#6c76f2"}}>|</span>
        <div className="comapanies">SBI</div><span className='slash' style={{color:"#6c76f2"}}>|</span>
        <div className="comapanies">Status Airvision</div>
      </div>
      </div>
      <div className="section1" style={{position:"relative"}}>
      <img className="pie" src={pie} alt=""  style={{position:"absolute",left:"-60px",opacity:"55%"}}/>
      <img className="pie2"src={pie2} alt=""  style={{position:"absolute",opacity:"55%",zIndex:"1"}}/>


        <p className='section-title'>Optimize Your Wealth.  Master Your Tax Strategy !</p>
        <p className="subheading">Streamline Tax Planning. Maximize Deductions Effortlessly. Efficient Financial Organization.</p> <p className='subheading'id="2" style={{marginTop:"-15px"}}>Proactive Problem Resolution. Regulatory Compliance Assurance</p> 
        <div className="box-container" style={{ zIndex: "2", fontFamily: "sunflower" }}>
  <div className="boxes-line" id="b1">
    <div className="box" style={{backgroundColor:"#2c4c4b"}}><FaDollarSign style={{ color: "#50c5a3" }} /></div>
    <span className='lowerhead' style={{ color: "white" }}>GST</span>
    <div className="subheading">
      <p>Goods and Services Tax (GST) consulting and compliance services.</p>
    </div>
  </div>
  <div className="boxes-line" id="b2">
    <div className="box" style={{backgroundColor:"#4f2e4d"}}><HiOutlineReceiptTax style={{ color: "#fa3daf" }} /></div>
    <span className='lowerhead' style={{ color: "white" }}>Income Tax</span>
    <div className="subheading">
      <p>Expertise in income tax planning, filing, and advisory services.</p>
    </div>
  </div>
  <div className="boxes-line" id='b3'>
    <div className="box"style={{backgroundColor:"#4e483c"}}><GoLaw style={{ color: "yellow" }} /></div>
    <span className='lowerhead' style={{ color: "white" }}>Company Law</span>
    <div className="subheading">
      <p>Legal consultation and compliance services related to company laws.</p>
    </div>
  </div>
  <div className="boxes-line" id='b4'>
    <div className="box" style={{backgroundColor:"#1c495c"}}><CiCalendar style={{ color: "#04a8e1" }} /></div>
    <span className='lowerhead' style={{ color: "white" }}>Finance & Consultancy</span>
    <div className="subheading" >
      <p>Comprehensive financial services tailored to your business needs.</p>
    </div>
  </div>
</div>

      
      <div className="btn3">Join Us Now</div>
      </div>
      <div className="description-container" style={{position:"relative"}}>
      <img id='star' className="image200" src={star1} alt="" style={{position:"absolute",opacity:"20%"}}/>
      <img  id='arrow'className="image200" src={arrow3} alt=""  style={{position:"absolute",opacity:"20%"}}/>


        <div className="description" id="d1">
        <div className="description-title">
        Streamline Your <br />Finances with <br />Invoice Management
          <div className="subheading" id='description-heading'>
          Say goodbye to invoice headaches! From organizing receipts to optimizing expense tracking, we handle the financial details so you can focus on your business.
          </div>
        </div>
        <img className='image1' src={invoice} alt=""  />
        </div>
        <div className="description" id="d2">
        <img className='image1' src={management} alt=""  />
        <div className="description-title">
        Optimize Your Income <br />Tax Returns  with Expert  Guidance.
          <div className="subheading" id='description-heading'>
          Navigate the complexities of income tax with confidence. Our seasoned chartered accountants specialize in maximizing your returns while ensuring compliance with the latest tax regulations. 
          </div>
        </div>
        
        </div>
        <div className="description" id="d3">
        <div className="description-title">
        Unlock Swift GST <br />Processing  for Your <br />Business.
          <div className="subheading" id='description-heading'>
          Elevate your financial experience with seamless GST management. Experience the efficiency of our services, tailored for businesses like yours.
          </div>
        </div>
        <img  id='image3' src={accounting} alt="" />
        </div>
        
      </div>
      <div className='section1' id="s2" style={{display:"flex",alignItems:"center",position:"relative",overflow:"hidden"}}>
  <div className="section-title">
    Frequently Asked Questions !
  </div>
  <img src={arrow} alt="" className="four" style={{position:"absolute",top:"30px",right:"-70px",opacity:"25%"}}/>
  <img src={vector2} alt="" className="four" style={{position:"absolute",bottom:"30px",left:"100px",opacity:"25%"}}/>

  <div className="questions" style={{color:click1?"white":"#6c76f2"}}>
    <h5 onClick={()=>{Setclick1(!click1)}}> What services do your Chartered Accountants provide ?      <span  style={{fontWeight:"bolder",fontSize:'4.5vh'}}>{click1?<RiArrowDownSLine  />:<RiArrowUpSLine />}</span></h5> 
    <p style={{opacity: click1 ? 0 : 1,
  height: click1 ? 0 : "auto",
  overflow: "hidden",
  fontFamily:"poppins",
  color:"#82888d",
  transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",}}>Our Chartered Accountants offer a range of services including auditing, taxation, financial advisory, and accounting services for individuals and businesses.</p>
  </div>
  <span className='dots' style={{color:"#82888d"}}>....................................................................................................................................................</span>
  <div className="questions" style={{color:click2?"white":"#6c76f2"}}>
    <h5 onClick={()=>{Setclick2(!click2)}}> How can I benefit from hiring a Chartered Accountant for my business ? <span  style={{fontWeight:"bolder",fontSize:'4.5vh', marginLeft:"2vw"}}>{click2?<RiArrowDownSLine  />:<RiArrowUpSLine />}</span></h5> 
    <p style={{opacity: click2 ? 0 : 1,
  height: click2 ? 0 : "auto",
  overflow: "hidden",
  fontFamily:"poppins",
  color:"#82888d",
  transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",}}>Hiring a Chartered Accountant can help ensure compliance with tax regulations, provide strategic financial advice, optimize tax returns, and enhance overall financial management for your business.</p>
  </div>
  <span className="dots" style={{color:"#82888d"}}>....................................................................................................................................................</span>

  <div className="questions"style={{color:click3?"white":"#6c76f2"}}>
    <h5 onClick={()=>{Setclick3(!click3)}}> What industries do you specialize in ? <span style={{fontWeight:"bolder",fontSize:'4.5vh', marginLeft:"2vw"}}  >{click3?<RiArrowDownSLine  />:<RiArrowUpSLine />}</span></h5> 
    <p style={{opacity: click3 ? 0 : 1,
  height: click3 ? 0 : "auto",
  overflow: "hidden",
  color:"#82888d",
  fontFamily:"poppins",
  transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",}}>We have expertise across various industries, including but not limited to manufacturing, IT, healthcare, retail, and services. Our Chartered Accountants are equipped to cater to the diverse needs of different sectors.</p>
  </div>
  <span className="dots" style={{color:"#82888d"}}>....................................................................................................................................................</span>

  <div className="questions"style={{color:click4?"white":"#6c76f2"}}>
    <h5 onClick={()=>{Setclick4(!click4)}}> How do I get started with your Chartered Accountant services ? <span style={{fontWeight:"bolder",fontSize:'4.5vh', marginLeft:"2vw"}} >{click4?<RiArrowDownSLine  />:<RiArrowUpSLine />}</span></h5> 
   <p style={{opacity: click4 ? 0 : 1,
  height: click4? 0 : "auto",
  color:"#82888d",
  overflow: "hidden",
  fontFamily:"poppins",
  transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",}}>Getting started is easy! Simply reach out to our team via phone or email to schedule an initial consultation. During this meeting, we will discuss your specific needs and tailor our services to meet your requirements.</p>
  </div>
  
</div>
<div className="footer">
  <h2 className='footer-logo'>S.B. Jajoo & Co.</h2>
  <div className="ok"style={{display:"flex",flexDirection:"column" ,alignItems:"baseline"}}><span className="subheading" >Get In Touch</span>
  <a  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sbjajoooffice@gmail.com"style={{fontFamily:"poppins",textDecoration:"none",color:"#32315b",marginTop:"2%"}}>sbjajoooffice@gmail.com</a>
  </div>
  <div className="ok"style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start",fontFamily:"poppins"}}><span className="subheading" >Address</span>
  <span >165,<br />Parekh Nagar, S.V.Road, <br />Kandivali West</span>
  </div>
  <div className="ok"style={{display:"flex",flexDirection:"column" ,alignItems:"baseline",fontFamily:"poppins",textDecoration:"none"}}><span className="subheading" >Legal</span>
  <a href="" style={{textDecoration:"none" , color:"#32315b"}}>Terms and Conditions</a> <br />
  <a href=""style={{textDecoration:"none" , color:"#32315b"}}>Privacy Policy</a> <br />
 <a href=''style={{textDecoration:"none" , color:"#32315b"}}>Disclaimer</a> 

  </div>
</div>

      
      </>
    );
  }
  
