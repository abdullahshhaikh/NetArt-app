import React from "react";
import "./TopDiv.css";
import trophy from "../images/1.png";
import team from "../images/2.png";

function TopDiv() {
  return (
    <section id="top-section">
      <div className="top-main-div">
        <div className="top-left-div">
          <img src={trophy} alt="trophy" className="trophy-image"></img>
        </div>
        <div className="top-right-div">
          <div className="right-top-div">
            <span>
              <strong>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </strong>
            </span>
            <ul >
              <li className="bullet-points">
                CRI's energy efficient products are well recognized by various
                Government institutions, as trustworthy products for various
                projects across the globe to save energy
              </li>
              <li className="bullet-points">
                CRI is the highest contributor in the country for the projects
                of EESL (Energy Efficiency Services Limited) to replace the old
                inefficient pumps with 5Star rated energy efficient smart pumps
                with loT enabled control panel.
              </li>
            </ul>
          </div>
          <div className="right-middle-div">
            <img src={team} alt="team" className="team-image"></img>
          </div>
          <div className="right-bottom-div">
            <span>
              Government of India has awarded the <strong>"National Energy Conservation
              Award 2018"</strong> Mr. G. Selvaraj, Joint Managing Director of CRI Group
              received the award from Smt. Sumitra Mahajan. Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopDiv;
