import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_13.JPG";

class Page13 extends Component {
  render() {
    return (
      <div className="Page13">

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
        Some scientists will ask if they can measure how tall you are, how much you weigh, or even how big around your head is! This helps them learn more about how your body is growing.
Sofia is learning about the different data that scientists collect. Can you share some data about yourself? 
Do you know how tall you are?___feet___Inches
Do you know how much you weigh?____ pounds
What size shoe are you?

        </div>
        <img src = {Image}/>



      </div>
    );
  }
}

export default Page13;
