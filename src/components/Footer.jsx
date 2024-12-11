import React from 'react';
import logo from '../assets/images/logo2.png'; // Replace with your logo image path
import twitterIcon from '../assets/images/x.png';
import instagramIcon from '../assets/images/i.png';
import facebookIcon from '../assets/images/fb.png';

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex  py-3  border-top">
          {/* Left Logo Section */}
          <div className="col-md-4 d-flex">
            <a href="/" className="mb-3 mb-md-0 text-muted text-decoration-none ">
              <img
                src={logo}
                alt="Logo"
                width="40"
                height="40"
               
              />
            </a>
           
          </div>

          {/* Social Media Icons */}
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={twitterIcon} alt="Twitter" width="24" height="24" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={instagramIcon} alt="Instagram" width="24" height="24" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={facebookIcon} alt="Facebook" width="24" height="24" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
