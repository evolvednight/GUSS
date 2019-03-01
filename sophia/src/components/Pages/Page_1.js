import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_1.JPG";

class Page1 extends Component {
  render() {
    return (
      <div className="Page1">

        <Navbar fixed="top" variant="dark" className="navbar">
          <div className="logo">SOPHIA'S STORYBOOK</div>
        </Navbar>

        <div className="text">
        Sofia
        </div>

        <div className="text">
        Learns
        </div>

        <div className="text">
        Research
        </div>

        <div className="text">
        Sofia was bored. She and her brother, Michael, were at the doctor's office, again. Sofia had asthma (said like az-muh). This is a condition that can make it hard to breathe. Sometimes Sofia would wheeze, cough, and her chest would feel tight. Wheezing means there is a whistling sound when she would breathe. She had to go for check-ups a lot to make sure she had the right medicine to help her lungs work. She was tired of going to the doctor's.
        
        </div>
        <img src = {Image}/>



      </div>
    );
  }
}

export default Page1;
