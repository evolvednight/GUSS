import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_14.JPG";
import { Link } from "react-router-dom";
class Page14 extends Component {
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
      <div className="Page14">
        <div className="text">
          Sofia saw the word clinical trials on the sign on the wall. “What does
          that mean?” asked Sofia next. “Another great question, Sofia. A
          clinical trial is when you try out a new kind of treatment, like a
          medicine, to see if it works. Sometimes the people in the study
          actually try the new medicine. Sometimes the people in the study take
          a pretend medicine. This is called a placebo." Sofia thinks this is a
          little strange. “Why would they take a pretend medicine?" she asked.
          Dr. Q said, “That does seem funny, doesn't it? Well, if the people in
          the study start to feel better, the scientist wants to make sure it is
          because of the medicine and not because of something else that
          happened in the study.” Dr. Q explained a little more. “There is also
          a kind of study where some people try a new medicine and other people
          try an old one. This is to see if the new one works better.”
        </div>
        <img src={Image} alt="image" />
        <div className="alt_text">
        A container that holds six tubes of blood.
        </div>
        <Link to="/page13" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page15" style={{ textDecoration: "none" }}>
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

export default Page14;
