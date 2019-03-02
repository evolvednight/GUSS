import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_16.JPG";
import { Link } from "react-router-dom";
class Page16 extends Component {
  render() {
    return (
      <div className="Page16">
      

        <div className="text">
          Scientists often try to figure out how two different medicines are
          different. This takes good observation skills. Can you help Sofia find
          the difference between these two pictures? The first one is how she
          looked after taking a hike on a hot, sunny day without bug spray and
          sun protection. The second picture is how she looked the following
          week after remembering her bug spray and sun protection.
        </div>
        <img src={Image} alt="" />
        <Link to="/page15">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page17">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page16;
