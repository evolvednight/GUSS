import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_10.JPG";
import { Link } from "react-router-dom";
class Page10 extends Component {
  render() {
    return (
      <div className="Page10">
      

        <div className="text">
          You might be asked to participate in a focus group. That is when a
          group of people come together to talk about a topic that the scientist
          is interested in learning more about.
        </div>
        <img src={Image} alt="image" />

        <div className="alt_text">
        A group of 4 girls and 3 boys sitting in a circle while a female teacher points at a diagram of human lungs. Another female sits on a chair taking notes with a clipboard observing the children learn from the teacher.
        </div>
        <Link to="/page9" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page11" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page10;
