import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_12_Bottom.JPG";
import Image1 from "./Sofia_Images/Page_12_top.JPG";
import { Link } from "react-router-dom";
class Page12 extends Component {
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
      <div className="Page12">
        <div className="text">
          Sometimes scientists ask you to give a sample of blood to understand
          what's going on inside your body.
        </div>
        <img src={Image1} alt="image" />
        <img src={Image} alt="image" />
        <div className="alt_text">
        Someone taking blood from a person's arm using a syringe. A tube of blood is inserted into a machine to seperate the blood into layers. These layers are plasma, white, and red blood cells. There is a miscroscope looking into a sample of blood.
        </div>
        <Link to="/page11" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page13" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            autoFocus
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        <Button ref="sound" onKeyDown={this.handleKeyPress} className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page12;
