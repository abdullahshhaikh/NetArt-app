import React from "react";
import logo from "../images/logo.png"
import "./NavBar.css"
function NavBar() {
  return (
    <section id="navbar-section">
      <nav className="navbar-nav">
          <div className="navbar-div">
              <img src={logo} alt="company-logo" className="navbar-logo"></img>
          </div>
      </nav>
    </section>
  );
}

export default NavBar;
