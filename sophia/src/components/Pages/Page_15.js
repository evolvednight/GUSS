import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_15.JPG";
import { Link } from "react-router-dom";
class Page15 extends Component {
  render() {
    return (
      <div className="Page15">

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
        Sofia was thinking, 'This kind of makes sense. I remember when I used to tie my shoes one way and they always came untied. 
That was really annoying. Then my mom showed me a different way to do it.' 
'When I tie my shoes the new way, they stay tied all day. Now I don't trip on them anymore. It's great!' 

        </div>
        <img src = {Image}/>
        <Link to= "/page14">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page16">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page15;
