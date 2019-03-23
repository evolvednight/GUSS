import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_19.JPG";
import { Link } from "react-router-dom";
class Page19 extends Component {
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
      <div className="Page19">
        <div className="text">
          "Consent is when you agree to be in the study," answered Dr. Q. "It's
          when you say that you want to be in a study after you learn about what
          the study is. It's my job to tell you exactly what you would do if you
          were in the study. I have to tell you the good things that can happen
          and also the bad things. Then, you would decide if you wanted to do
          it.” "Since you're still young, we also talk with your parents about a
          study. They can help decide with you if it's a good idea. If you all
          think it is, then they give consent for you to participate. You would
          also have to assent to the study. This means that you agree that you
          want to do it. If you agree to be a part of the study and give consent
          then you'll be called a participant which is what a person who is in a
          study is called.”
        </div>
        <img src={Image} alt="image" />
        <Link to="/page18" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page20" style={{ textDecoration: "none" }}>
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

export default Page19;
