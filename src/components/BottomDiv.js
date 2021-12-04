import React from "react";
import "./BottomDiv.css";
import tools from "../images/3.png";

const line = <span style={{color:"red"}}>|</span>

function BottomDiv() {
  return (
    <section id="bottom-div-section">
      <div className="bottom-div">
        <div className="bottom-div-1">
          <span>
            <strong>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 1000 MILLION UNITS
              OF POWER FOR THE NATION
            </strong>
          </span>
        </div>
        <div className="bottom-div-2">
          <img src={tools} alt="tools" className="tools"></img>
        </div>
        <div className="bottom-div-3">
          <span style={{fontWeight:600}}>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar
            Systems - Motors
          </span>
        </div>
        <div className="bottom-div-4"> 
          <span className="forth-div-span" style={{marginBottom:"1rem" }}>
            <strong>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </strong>
          </span>
          <span className="forth-div-span products-span">
            CHEMICALS & PROCESS {line} POWER {line} WATER & WASTE WATER {line} OILS & GAS {line}
            PHARMA {line} SUGARS & DISTILLERIES {line} PAPER & PULP {line} MARINE & DEFENCE {line}
            METAL & MINING {line} FOOD& BEVERAGE
          </span>
          <span className="forth-div-span products-span">
            PETROCHEMICAL & REFINERIES {line} SOLAR {line} BUILDING {line} HVAC {line} FIRE FIGHTING
            {line} AGRICULTURE & RESIDENTIAL
          </span>
        </div>
      </div>
    </section>
  );
}

export default BottomDiv;
