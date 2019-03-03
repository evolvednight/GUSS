import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_4.JPG";
import { Link } from "react-router-dom";
class Page4 extends Component {
  render() {
    return (
      <div className="Page4">
       

        <div className="text">
          Dr. Q. walked in. Sofia felt a little better when she saw that Dr. Q
          didn't look scary at all. She was smiling and had glasses just like
          Michael. "Hi, Sofia! It's nice to meet you. Hi, Mr. Moreno! And who is
          the little fellow here?” she said, looking at Michael. He was still
          climbing on the chairs. “I'd like to tell you about my research study.
          Is that okay with you?” said Dr. Q. Sofia's dad said, “It's nice to
          meet you, too. We would like to hear more about it. Thank you."
        </div>
        <img src={Image} alt="" />
        <Link to="/page3" style={{textDecoration: 'none'}}>
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page5" style={{textDecoration: 'none'}}>
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page4;
