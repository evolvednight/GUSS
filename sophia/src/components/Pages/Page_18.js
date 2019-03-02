import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_18.JPG";

class Page18 extends Component {
  render() {
    return (
      <div className="Page18">

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
        Michael was getting a little confused, “That's a lot of stuff to keep track of!" 
Dr. Q said, “It sure is a lot of data! But it is actually kind of fun! And all of these different kinds of studies have two things in common. First, they all help us learn more about being healthy." 
"Second, and most important, you can only be in a study if you AND your parents give your consent.” 
Sofia heard a word she was not sure of. She asked “Wait. What Is consent?” 

        </div>
        <img src = {Image}/>



      </div>
    );
  }
}

export default Page18;
