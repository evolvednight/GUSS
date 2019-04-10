import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Page8 extends Component {
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
      <div className="Page8">
        <div className="text">
          Can you help Sofia find all the words she just learned about?
        </div>

<<<<<<< HEAD
        <div className="text">Game</div>
        <Link to="/page7" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
=======
        <Link to="/page7" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
>>>>>>> game
        </Link>
        <Link to="/page9" style={{ textDecoration: "none" }}>
          <Button
            autoFocus
            ref="rightBtn"
            onKeyDown={this.handleKeyPress}
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

export default Page8;
