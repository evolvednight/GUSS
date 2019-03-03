import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Page5 extends Component {
  render() {
    return (
      <div className="Page5">
       

        <div className="text">
          Sofia started to think of research about rats finding their way. Can
          you help this rat find the cheese?
        </div>

        <div className="text">Game</div>
        <Link to="/page4" style={{textDecoration: 'none'}}>
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page6" style={{textDecoration: 'none'}}>
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page5;
