import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_7.JPG";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page7.m4a';
class Page7 extends Component {
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
      <div className="Page7">
        <div className="text">
          Dr. Q. said “Great question! A study is a lot like a science
          experiment you might have done in school. We start with a question
          about something. Then we think about how we can find answers to that
          question. We will sometimes guess at what we think the answer is and
          our guess is called a hypothesis.” Michael became interested in what
          Dr. Q was saying. He said, “Can I help do research too? I don't have
          asthma." Dr. Q said, “Of course! Anyone can help with research. Some
          studies need help from people with an illness. Other studies need help
          from people without an illness. We need everybody's help to learn how
          to take better care of people!" Sofia needed to think about all of
          this, and she wasn't sure she could remember…
        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <img src={Image} alt="image" />
        <div className="alt_text">
        Four bacterias. One circular one with other smaller circles in it. One long one with spiky ball frills coming out of it. One small long one with small spikes coming out of it. One spiky ball one with medium circles in it.
        </div>
        <Link to="/page6" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page8" style={{ textDecoration: "none" }}>
          <Button
            autoFocus
            ref="rightBtn"
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        
      </div>
    );
  }
}

export default Page7;
