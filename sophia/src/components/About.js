import React, { Component } from "react";
import "./About.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Navbar fixed="top" variant="dark" className="navbar">
          <div className="logo">
            {" "}
            <Link to="/">SOPHIA'S STORYBOOK</Link>
          </div>
        </Navbar>

        <div className="about-card">
          <p>Wazzup</p>
        </div>
      </div>
    );
  }
}

export default About;
