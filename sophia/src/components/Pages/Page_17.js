import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_17.JPG";
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
          There are 12 differences. Did you find them all? Differences on the
          playground: 1. No flying bugs 2. Long sleeves and pants on Sofia 3. No
          bug bites on Sofia 4. Long sleeves and pants on Michael 5. No bug
          bites on Michael 6. Hat on Sofia 7. Bottle of bug spray 8. Kid playing
          with ball instead of truck 9. No kid on slide 10. Flower near Michael
          11. Butterfly 12. Bird on Sofia's bench
        </div>
        <img src={Image} alt="image" />
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
