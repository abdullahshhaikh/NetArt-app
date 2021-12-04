import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="footer-section">
      <footer>
        <div className="footer-div">
          <div className="footer-div">
            <span className="footer-span"><i class="fas fa-phone-square-alt"></i> Toll free 1800 200 1234</span>
          </div>
          <div className="footer-div">
            <span className="footer-span"><i class="fab fa-facebook"></i> www.facebook.com/cripumps</span>
          </div>
          <div className="footer-div">
            <span className="footer-span"><i class="fas fa-globe"></i> www.crigroups.com</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
