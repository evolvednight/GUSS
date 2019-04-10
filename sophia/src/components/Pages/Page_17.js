import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_17.JPG";
import Image1 from "./Sofia_Images/spot_difference_1.JPG"
import Image2 from "./Sofia_Images/spot_difference_2.JPG"
import Image3 from "./Sofia_Images/spot_difference_3.JPG"
import Image4 from "./Sofia_Images/spot_difference_4.JPG"
import Image5 from "./Sofia_Images/spot_difference_5.JPG"
import Image6 from "./Sofia_Images/spot_difference_6.JPG"
import Image7 from "./Sofia_Images/spot_difference_7.JPG"
import Image8 from "./Sofia_Images/spot_difference_8.JPG"
import Image9 from "./Sofia_Images/spot_difference_9.JPG"
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

        <div className= "Game">
        <Button className = "Image1" size= "sm"><img src={Image1} alt="image1"/></Button>
        <Button className = "Image2" size= "sm"><img src={Image2} alt="image2"/></Button>
        <Button className = "Image3" size= "sm"><img src={Image3} alt="image3"/></Button>
        <Button className = "Image4" size= "sm"><img src={Image4} alt="image4"/></Button>
        <Button className = "Image5" size= "sm"><img src={Image5} alt="image5"/></Button>
        <Button className = "Image6" size= "sm"><img src={Image6} alt="image6"/></Button>
        <Button className = "Image7" size= "sm"><img src={Image7} alt="image7"/></Button>
        <Button className = "Image8" size= "sm"><img src={Image8} alt="image8"/></Button>
        <Button className = "Image9" size= "sm"></Button>
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
