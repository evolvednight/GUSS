import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_7.JPG";
import { Link } from "react-router-dom";

class Page7 extends Component {
  render() {
    return (
      <div className="Page7">
       

        <div className="text">
          Dr. Q. said “Great question! A study is a lot like a science
          experiment you might have done in school. We start with a question
          about something. Then we think about how we can find answers to that
          question. We will sometimes guess at what we think the answer is and
          our guess is called a hypothesis.” Michael became interested in what
          Dr. Q was saying. He said, “Can I help do research too? I don't have
          asthma." Dr. Q said, “Of course! Anyone can help with research. Some
          studies need help from people with an illness. Other studies need help
          from people without an illness. We need everybody's help to learn how
          to take better care of people!" Sofia needed to think about all of
          this, and she wasn't sure she could remember…
        </div>
        <img src={Image} alt="image" />

        <div className="alt_text">
        Four bacterias. One circular one with other smaller circles in it. One long one with spiky ball frills coming out of it. One small long one with small spikes coming out of it. One spiky ball one with medium circles in it.
        </div>
        <Link to="/page6" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page8" style={{textDecoration: 'none'}}>
          <Button  className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page7;
