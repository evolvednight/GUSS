import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";

class Page3 extends Component {
  render() {
    return (
      <div className="Page3">

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
        Dr. Wilson said, “I would like you to meet someone who can tell you more about it. Dr. Amanda Quinby is a scientist. You can call her Dr. Q. She can tell you all about a research study that you might want to help with. It will help us understand asthma better. What we find will help us help other children with asthma." 
        Sofia heard the words “scientist” and “research” and got a little scared. She thought about movies with mad scientists and wild experiments. She was not a guinea pig! 
        </div>



      </div>
    );
  }
}

export default Page3;
