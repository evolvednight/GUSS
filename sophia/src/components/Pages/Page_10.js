import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_10.JPG";

class Page10 extends Component {
  render() {
    return (
      <div className="Page10">

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
        You might be asked to participate in a focus group. That is when a group of people come together to talk about a topic that the scientist is interested in learning more about.

        </div>
        <img src = {Image}/>



      </div>
    );
  }
}

export default Page10;
