import React from 'react'
import footercontent from '../../api/footerData.json'
import { ImLocation2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Footer = () => {

  const footerIcon = {
    ImLocation2: <ImLocation2 />,
    IoCall: <IoCall />,
    MdEmail: <MdEmail />
  }

  return (
    <footer className='footer-section'>
      <div className="container grid-footer">
        {footercontent.map((currData, index) => {
          const { icon, title, details } = currData;
          return (
            <div className='footer-content' key={index}>
              <div className="footer-icon">{footerIcon[icon]}</div>
              <div className="footer-text">
                <h4>{title}</h4>
                <p>{details}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="container footer-details">
          <div className="copyright">
           <p>Copyright © 2024, All Right Reserved</p>
          </div>
          <div className="footer-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='https://icodethis.com/VIKAS_POKHIRYAL' target='_blank'>Social</NavLink>
            <NavLink to='https://github.com/Vikaspokhriyal20' target='_blank'>Source Code</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>
    </footer>
  )
}

export default Footer
