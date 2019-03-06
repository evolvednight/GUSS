import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_12_Bottom.JPG";
import Image1 from "./Sofia_Images/Page_12_top.JPG";
import { Link } from "react-router-dom";
class Page12 extends Component {
  render() {
    return (
      <div className="Page12">
        
        <div className="text">
          Sometimes scientists ask you to give a sample of blood to understand
          what's going on inside your body.
        </div>
        <img src={Image1} alt="image" />
        <img src={Image} alt="image" />
        <Link to="/page11" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page13" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button className ="sound">sound</Button>
      </div>
    );
  }
}

export default Page12;
