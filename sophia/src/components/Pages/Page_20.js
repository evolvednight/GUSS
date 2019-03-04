import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page20 extends Component {
  render() {
    return (
      <div className="Page20">
       

        <div className="text">
          Lots and Lots of Research Words Complete the crossword below
        </div>

        <div className="text">Game</div>
        <Link to="/page19" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page21" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page20;
