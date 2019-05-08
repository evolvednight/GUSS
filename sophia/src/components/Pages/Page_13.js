import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_13.JPG";
import { Link } from "react-router-dom";
class Page13 extends Component {
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
      <div className="Page13">
        <div className="text">
          Some scientists will ask if they can measure how tall you are, how
          much you weigh, or even how big around your head is! This helps them
          learn more about how your body is growing. Sofia is learning about the
          different data that scientists collect. Can you share some data about
          yourself? Do you know how tall you are?___feet___Inches Do you know
          how much you weigh?____ pounds What size shoe are you?
        </div>
        <img src={Image} alt="image" />
                <div className="alt_text">
        A doctor is measuring the height and weight of a boy.
        </div>
        
        <Link to="/page12" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page14" style={{ textDecoration: "none" }}>
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

export default Page13;
