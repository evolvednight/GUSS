import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_27.JPG";
import { Link } from "react-router-dom";
class Page27 extends Component {
  render() {
    return (
      <div className="Page27">

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
        “Answering questions is my job!" Dr. Q said. “My job is to connect all of the dots to make sure you see the whole picture. If you decide to help with a study, my job is to make sure that you are feeling okay while you're helping. It's up to you to decide if you want to help us. You have a chance to help other kids, and who knows, maybe even change the world!" 
"What do you think? Would you like to participate in my study?” Dr. Q asked Sofia and her dad. 
Sofia said, “I think I would like to do that! I want to help change the world!”

        </div>
        <img src = {Image}/>
        <Link to= "/page26">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page28">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page27;
