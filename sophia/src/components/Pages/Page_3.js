import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_3.JPG";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page3.m4a';
class Page3 extends Component {
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
      <div className="Page3">
        <div className="text">
          Dr. Wilson said, “I would like you to meet someone who can tell you
          more about it. Dr. Amanda Quinby is a scientist. You can call her Dr.
          Q. She can tell you all about a research study that you might want to
          help with. It will help us understand asthma better. What we find will
          help us help other children with asthma." Sofia heard the words
          “scientist” and “research” and got a little scared. She thought about
          movies with mad scientists and wild experiments. She was not a guinea
          pig!
        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <img src={Image} alt="image" />
        <div className="alt_text">
        Dr. Amanda Quinby walks in smiling into the room. Sofia’s dad and brother sitting on the chair  look at Dr. Amanda with a smile. Sofia frowns at the sight of Dr. Amanda. Dr. Wilson stood in the room still talking to Sofia.
        </div>
        <Link to="/page2" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page4" style={{ textDecoration: "none" }}>
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
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page3;
