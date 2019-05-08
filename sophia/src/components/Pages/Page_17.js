import React, { Component } from "react";
import { Button } from "react-bootstrap";
import SpotDiff from "../Games/SpotDiff";
import { Link } from "react-router-dom";


class Page17 extends Component {
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
      <div className="Page17">
        <div className="text">
         There are 9 differences. Can you find them all?
        </div>
        

        <div className = "Game_board">
        {/* <img src={Image} alt="image" /> */}
        <SpotDiff />
        </div>

      
        



        <Link to="/page16" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page18" style={{ textDecoration: "none" }}>
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

export default Page17;
