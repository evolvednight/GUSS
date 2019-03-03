import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page22 extends Component {
  render() {
    return (
      <div className="Page22">
      
        <div className="text">
          Crack the Code! Help Sofia figure out the hidden message!
        </div>

        <div className="text">Game</div>
        <Link to="/page21" style={{textDecoration: 'none'}}>
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page23" style={{textDecoration: 'none'}}>
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page22;
