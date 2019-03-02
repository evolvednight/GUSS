import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_3.JPG";
import { Link } from "react-router-dom";
class Page3 extends Component {
  render() {
    return (
      <div className="Page3">
        <div className="text">Sofia</div>

        <div className="text">Learns</div>

        <div className="text">Research</div>

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
        <img src={Image} alt="" />
        <Link to="/page2">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page4">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page3;
