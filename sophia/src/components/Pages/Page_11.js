import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page11 extends Component {
  render() {
    return (
      <div className="Page11">
       
        <div className="text">
          You might be asked to complete a survey. This is where you answer
          questions on paper or on a computer about yourself. Practice taking a
          survey! Write your answers to the questions. 1. How old are you? 2. In
          what city do you live? 3. What are your favorite foods? 4. What do you
          like to do for fun that is also exercise? 5. Do you have any pets?
          (circle your answer) Yes No 6. If yes, what kinds of animals do you
          have?
        </div>
        <Link to="/page10" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page12" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page11;
