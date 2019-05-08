import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_23.JPG";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page3.m4a';
class Page23 extends Component {
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
      <div className="Page23">
        <div className="text">
          Sofia was pretty sure she understood. She said, “Okay, we have to tell
          you that it's okay for us to be in the study and you'll tell us if
          there are any bad things that could happen?" “Absolutely,” said Dr. O,
          “Can I tell you about my research study?” Sofia and Michael were
          excited, and said at the same time "Yes!” Dr. Q explained, “In my
          study, you will come into the doctor's office a little more than you
          usually do. We will sometimes do check-ups to make sure you are
          feeling okay. Sometimes, we might take a blood sample from you with a
          needle. Blood helps us learn about what's going on inside of you, so
          we know you're healthy inside and out! There are other tests that will
          help us with that too."
        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <img src={Image} alt="image" />
        <div className="alt_text">
        Sofia and her brother both sitting on the counter, holding a pen with a smile while looking at Dr. Q. Sofia’s dad and Dr.Q watches the two while standing up.
        </div>
        <Link to="/page22" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page24" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            autoFocus
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

export default Page23;
