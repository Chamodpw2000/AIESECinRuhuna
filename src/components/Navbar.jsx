import React from "react";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/logo2.png";

const Navbar = () => {
  return (


    <div className="d-none d-md-block" style={{marginBottom:"125px"}} >


<div className="container-fluid px-5 header fixed-top bg-white">
      <header className="d-flex align-items-center justify-content-between py-3 border-bottom">
        {/* Left Logo */}
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <img src={Logo} alt="Logo" className="img-fluid" style={{ width: "150px" }} />
        </a>

        {/* Navigation Links (Center) */}
        <ul className="nav d-flex justify-content-center">
          <li><a href="/" className="nav-link px-3 menu-color">Home</a></li>
          <li><a href="/dashboard" className="nav-link px-3 menu-color">Dashboard</a></li>
          <li><a href="/faq" className="nav-link px-3 menu-color">FAQs</a></li>
          <li><a href="/about" className="nav-link px-3 menu-color">About</a></li>
        </ul>

        {/* Right Logo */}
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <img src={Logo2} alt="Logo2" className="img-fluid" style={{ width: "100px" }} />
        </a>
      </header>
    </div>



    </div>
    
  );
};

export default Navbar;
