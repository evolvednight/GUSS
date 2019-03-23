import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page33 extends Component {
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
      <div className="Page33">
        <div className="text">
          Special thanks to all of the families who helped us make this book the
          best it could be! The Buhendwa Family The Berhalter Family The Cadzow
          Family The Caito Family The Corey Family The Ecker Family The Jackson
          Family The Knowles Family The Liss Family The Molnar We couldn't have
          done it without you!
        </div>
        <Link to="/page1">
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/About">
          <Button
            autoFocus
            onKeyDown={this.handleKeyPress}
            ref="rightBtn"
            className="rightBtn"
          >
            ABOUT PAGE
          </Button>
        </Link>
        <Button onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page33;
