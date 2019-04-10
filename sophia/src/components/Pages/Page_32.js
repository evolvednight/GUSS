import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_32.JPG";
import { Link } from "react-router-dom";
class Page32 extends Component {
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
      <div className="Page32">
        <div className="text">
          Scientist or Researcher: A person who tries to find answers to
          questions and solve problems. They do this through observations and
          experiments. Survey: A set of questions on paper or on a computer,
          tablet or phone that you answer to help with a study. Treatment:
          Something a doctor might give you or ask you to do in order to make
          you feel better when you're sick. It can be a certain kind of exercise
          or a kind of medicine or even a new kind of food. Wheezing: A
          whistling noise that the lungs make when it is hard to breathe. This
          happens because the tubes in the lungs are too narrow. Wheezing can be
          a symptom of asthma, but it can also be because of other things.
        </div>
        <img src={Image} alt="image" />
        <div className="alt_text">
        A microscope 
        </div>
        <Link to="/page31" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page33" style={{ textDecoration: "none" }}>
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

export default Page32;
