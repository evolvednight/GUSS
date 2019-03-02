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
        <img src={Image} alt="" />
        <Link to="/page9">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page11">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page10;
