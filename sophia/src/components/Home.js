import React, { Component } from "react";
import "./Home.css";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navigation from "./Navigation"
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="about-card">
          <Button variant="danger" className="btn_1">
            START STORY
          </Button>
          <Button variant="warning" className="btn_2">
            SKIP PAGES
          </Button>
          <Link to="/About">
            <Button variant="primary" className="btn_3">
              ABOUT
            </Button>
          </Link>
          <Link to="/Help">
            <Button variant="info" className="btn_4">
              Help
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
