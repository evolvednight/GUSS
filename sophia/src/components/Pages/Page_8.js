import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Crossword from "../Games/Crossword";


class Page8 extends Component {
  render() {
    return (
      <div className="Page8">
       

        <div className="text">
          Can you help Sofia find all the words she just learned about?
        </div>

        <Crossword />
        <Link to="/page7" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page9" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
      
    );
  }
}

export default Page8;
