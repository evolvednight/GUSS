import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page3.m4a';
import Image from "./Sofia_Images/page_22.JPG";
class Page22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "Wow",
      play: false,
      pause: true,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    if(this.state.value.toLowerCase() == "research rangers help solve problems"){
    alert('Correct!');}
    else{
    alert('Incorrect, please try again' + this.state.value);}
    event.preventDefault();
  }
  

  render() {
    return (
      <div className="Page22">
        <div className="text">
          
        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <form onSubmit={this.handleSubmit}>
        <label ref = "lab" className = "lab">
        Crack the Code! Help Sofia figure out the hidden message!
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
       

      <img src={Image} alt="image" />
        <Link to="/page21" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page23" style={{ textDecoration: "none" }}>
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

export default Page22;