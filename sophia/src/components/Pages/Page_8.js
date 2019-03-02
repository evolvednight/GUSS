import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page8 extends Component {
  render() {
    return (
      <div className="Page8">

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
        Can you help Sofia find all the words she just learned about?
        </div>

        <div className="text">
        Game
        </div>
        <Link to= "/page7">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page9">
        <Button>
          Next Page
        </Button>
        </Link>

      </div>
    );
  }
}

export default Page8;
