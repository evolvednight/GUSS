import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_18.JPG";
import { Link } from "react-router-dom";
class Page18 extends Component {
  render() {
    return (
      <div className="Page18">
       

        <div className="text">
          Michael was getting a little confused, “That's a lot of stuff to keep
          track of!" Dr. Q said, “It sure is a lot of data! But it is actually
          kind of fun! And all of these different kinds of studies have two
          things in common. First, they all help us learn more about being
          healthy." "Second, and most important, you can only be in a study if
          you AND your parents give your consent.” Sofia heard a word she was
          not sure of. She asked “Wait. What Is consent?”
        </div>
        <img src={Image} alt="" />
        <Link to="/page17" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page19" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page18;
