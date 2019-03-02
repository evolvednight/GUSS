import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Page5 extends Component {
  render() {
    return (
      <div className="Page5">

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
        Sofia started to think of research about rats finding their way. 
        Can you help this rat find the cheese? 
        </div>

        <div className="text">
        Game
        </div>
        <Link to= "/page4">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page6">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page5;
