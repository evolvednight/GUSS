import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_16.JPG";
import { Link } from "react-router-dom";
class Page16 extends Component {
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
      <div className="Page16">
        <div className="text">
          Scientists often try to figure out how two different medicines are
          different. This takes good observation skills. Can you help Sofia find
          the difference between these two pictures? The first one is how she
          looked after taking a hike on a hot, sunny day without bug spray and
          sun protection. The second picture is how she looked the following
          week after remembering her bug spray and sun protection.
        </div>
        {/* <img src={Image} alt="image" /> */}

        <div className="Game_16">
        </div>

        <Link to="/page15" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page17" style={{ textDecoration: "none" }}>
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

export default Page16;
