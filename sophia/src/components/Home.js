import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  handleKeyPress = e => {
    let buttonName = e.target.className;
    let buttonNameSplit = buttonName.split(" ");
    if (e.keyCode === 40) {
      if (buttonNameSplit[0] === "btn_1") {
        this.refs.btn_2.focus();
      }
      if (buttonNameSplit[0] === "btn_2") {
        this.refs.btn_3.focus();
      }
      if (buttonNameSplit[0] === "btn_3") {
        this.refs.btn_4.focus();
      }
    } else if (e.keyCode === 38) {
      if (buttonNameSplit[0] === "btn_2") {
        this.refs.btn_1.focus();
      }
      if (buttonNameSplit[0] === "btn_3") {
        this.refs.btn_2.focus();
      }
      if (buttonNameSplit[0] === "btn_4") {
        this.refs.btn_3.focus();
      }
    }
  };

  render() {
    return (
      
      <div className="home">
      
        <div className="home-card">
          <Link to="/Page1" style={{ textDecoration: "none" }}>
            <Button
              onKeyDown={this.handleKeyPress}
              ref="btn_1"
              autoFocus
              variant="danger"
              className="btn_1"
            >
              START STORY
            </Button>
          </Link>
          <Link to="/Skip_Pages" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_2"
              onKeyDown={this.handleKeyPress}
              variant="warning"
              className="btn_2"
            >
              SKIP PAGES
            </Button>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_3"
              onKeyDown={this.handleKeyPress}
              variant="primary"
              className="btn_3"
            >
              ABOUT
            </Button>
          </Link>
          <Link to="/Help" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_4"
              onKeyDown={this.handleKeyPress}
              variant="info"
              className="btn_4"
            >
              HELP
            </Button>
          </Link>


        </div>
        
      </div>
      
    );
  }
}

export default Home;
