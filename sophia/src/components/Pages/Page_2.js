import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_2.JPG";
import { Link } from "react-router-dom";

class Page2 extends Component {
  render() {
    return (
      <div className="Page2">
      

        <div className="text">
          Dr. Wilson came in. He said, “Do you want to do something special to
          help other kids with asthma?” Sofia thought, “This is new. I wonder
          what this means? It sounds good.” She was a little too nervous to say
          anything. Then she looked at her dad. Her dad said, “Maybe. Can you
          tell us a little more?”
        </div>
        <img src={Image} alt="" />
        <Link to="/page1" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page3" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page2;
