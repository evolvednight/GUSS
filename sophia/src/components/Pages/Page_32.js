import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_32.JPG";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page3.m4a';
class Page32 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "Wow",
      play: false,
      pause: true,
    }
    this.audio = new Audio(press);
    this.audio2 = new Audio(sounds);
  }
  play = () => {
    if(this.state.play ==false )
    {
    this.setState({ play: true, pause: false });
    this.audio.play();
    }
    else
    {
    this.setState({ play: false, pause: true });
    this.audio.pause();
    this.audio.pause();
    this.audio2.pause();
    }
  }
    play2 = () => {
      if(this.state.play ==false )
      {
      this.setState({ play: true, pause: false });
      this.audio2.play();
      }
      else
      {
      this.setState({ play: false, pause: true });
      this.audio.pause();
      this.audio.pause();
      this.audio2.pause();
      }
    }
      pause = () => {
        this.setState({ play: false, pause: true })
          this.audio2.pause();
          this.audio.pause();
        }
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
        <p>
        Scientist or Researcher: A person who tries to find answers to
          questions and solve problems. They do this through observations and
          experiments. Survey: A set of questions on paper or on a computer,
          tablet or phone that you answer to help with a study. 
        </p>
        <p>
        Treatment:
          Something a doctor might give you or ask you to do in order to make
          you feel better when you're sick. It can be a certain kind of exercise
          or a kind of medicine or even a new kind of food. Wheezing: A
          whistling noise that the lungs make when it is hard to breathe. This
          happens because the tubes in the lungs are too narrow. Wheezing can be
          a symptom of asthma, but it can also be because of other things.
        </p>
         
        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <img src={Image} alt="image" />
        <div className="alt_text">
        A microscope 
        </div>
        <Link to="/page31" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
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
            onClick={this.play}
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
      
      </div>
    );
  }
}

export default Page32;
