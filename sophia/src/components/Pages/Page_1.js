import React, { Component } from "react";
import Image from "./Sofia_Images/Page_1.JPG";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Page.css";

class Page1 extends Component {
  handleKeyPress = e => {
    let buttonName = e.target.className;
    let buttonNameSplit = buttonName.split(" ");
    if (e.keyCode === 39) {
      if (buttonNameSplit[0] === "leftBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.rightBtn.focus();
      }
    } else if (e.keyCode === 37) {
      if (buttonNameSplit[0] === "rightBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.leftBtn.focus();
      }
    }
  };
  render() {
    return (
      <div className="Page1">
        <div className="text">
          Sofia was bored. She and her brother, Michael, were at the doctor's
          office, again. Sofia had asthma (said like az-muh). This is a
          condition that can make it hard to breathe. Sometimes Sofia would
          wheeze, cough, and her chest would feel tight. Wheezing means there is
          a whistling sound when she would breathe. She had to go for check-ups
          a lot to make sure she had the right medicine to help her lungs work.
          She was tired of going to the doctor's.
        </div>

        <img src={Image} alt="image" />

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Home
          </Button>
        </Link>
        <Link to="/page2" style={{ textDecoration: "none" }}>
          <Button
            autoFocus
            onKeyDown={this.handleKeyPress}
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        <Button onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page1;
