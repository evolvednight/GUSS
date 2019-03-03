import React, { Component } from "react";
import Image from "./Sofia_Images/Page_1.JPG";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Page.css"

class Page1 extends Component {
  render() {
    return (
      <div className="Page1">


        <div className="text">
          Sofia was bored. She and her brother, Michael, were at the doctor's
          office, again. Sofia had asthma (said like az-muh). This is a
          condition that can make it hard to breathe. Sometimes Sofia would
          wheeze, cough, and her chest would feel tight. Wheezing means there is
          a whistling sound when she would breathe. She had to go for check-ups
          a lot to make sure she had the right medicine to help her lungs work.
          She was tired of going to the doctor's.
        </div>

        <div className="text">
          Sofia was bored. She and her brother, Michael, were at the doctor's
          office, again. Sofia had asthma (said like az-muh). This is a
          condition that can make it hard to breathe. Sometimes Sofia would
          wheeze, cough, and her chest would feel tight. Wheezing means there is
          a whistling sound when she would breathe. She had to go for check-ups
          a lot to make sure she had the right medicine to help her lungs work.
          She was tired of going to the doctor's.
        </div>
        <img src={Image} alt="" />
        <Link to="/" style={{textDecoration: 'none'}} >
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page2" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page1;
