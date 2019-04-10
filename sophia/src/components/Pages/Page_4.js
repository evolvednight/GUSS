import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_4.JPG";
import { Link } from "react-router-dom";
class Page4 extends Component {
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
      <div className="Page4">
        <div className="text">
          Dr. Q. walked in. Sofia felt a little better when she saw that Dr. Q
          didn't look scary at all. She was smiling and had glasses just like
          Michael. "Hi, Sofia! It's nice to meet you. Hi, Mr. Moreno! And who is
          the little fellow here?” she said, looking at Michael. He was still
          climbing on the chairs. “I'd like to tell you about my research study.
          Is that okay with you?” said Dr. Q. Sofia's dad said, “It's nice to
          meet you, too. We would like to hear more about it. Thank you."
        </div>
        <img src={Image} alt="image" />
        <Link to="/page3" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page5" style={{ textDecoration: "none" }}>
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

export default Page4;
