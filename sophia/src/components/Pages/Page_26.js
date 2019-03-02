import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page26 extends Component {
  render() {
    return (
      <div className="Page26">
      

        <div className="text">
          Sofia had one more question. It was important! “What if I want to
          stop?” she asked. "You can stop at any time!” said Dr. O, “One of the
          most important parts of research is making sure that you are feeling
          okay about it. If you decide that you do not want to do it anymore,
          that's okay. We won't be mad. You are allowed to stop whenever you
          want." “Phew!” said Sofia, “Wow! You answered so many questions Dr.
          Q." Connect The Dots!
        </div>

        <div className="text">Game</div>
        <Link to="/page25">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page27">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page26;
