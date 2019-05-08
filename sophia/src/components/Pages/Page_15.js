import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_15.JPG";
import { Link } from "react-router-dom";
class Page15 extends Component {
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
      <div className="Page15">
        <div className="text">
          Sofia was thinking, 'This kind of makes sense. I remember when I used
          to tie my shoes one way and they always came untied. That was really
          annoying. Then my mom showed me a different way to do it.' 'When I tie
          my shoes the new way, they stay tied all day. Now I don't trip on them
          anymore. It's great!'
        </div>
        <img src={Image} alt="image" />
        <div className="alt_text">
        Sofia thinking about tying her shoelace into a bow.
        </div>
        <Link to="/page14" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page16" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            autoFocus
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

export default Page15;
