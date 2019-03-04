import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="about-card">
          <Link to="/Page1" style={{textDecoration: 'none'}}>
            <Button variant="danger" className="btn_1">
              START STORY
            </Button>
          </Link>
          <Button variant="warning" className="btn_2">
            SKIP PAGES
          </Button>
          <Link to="/About" style={{textDecoration: 'none'}}>
            <Button variant="primary" className="btn_3">
              ABOUT
            </Button>
          </Link>
          <Link to="/Help" style={{textDecoration: 'none'}}>
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
