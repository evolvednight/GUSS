import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page33 extends Component {
  render() {
    return (
      <div className="Page33">
       

        <div className="text">
          Special thanks to all of the families who helped us make this book the
          best it could be! The Buhendwa Family The Berhalter Family The Cadzow
          Family The Caito Family The Corey Family The Ecker Family The Jackson
          Family The Knowles Family The Liss Family The Molnar We couldn't have
          done it without you!
        </div>
        <Link to="/page1">
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/About">
          <Button className="rightBtn">Next Page</Button>
        </Link>

      </div>
    );
  }
}

export default Page33;
