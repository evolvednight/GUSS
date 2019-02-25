import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";

class Page11 extends Component {
  render() {
    return (
      <div className="Page11">

        <Navbar fixed="top" variant="dark" className="navbar">
          <div className="logo">SOPHIA'S STORYBOOK</div>
        </Navbar>

        <div className="text">
        Sofia
        </div>

        <div className="text">
        Learns
        </div>

        <div className="text">
        Research
        </div>

        <div className="text">
        You might be asked to complete a survey. This is where you answer questions on paper or on a computer about yourself. 
Practice taking a survey! Write your answers to the questions. 
1. How old are you? 
2. In what city do you live? 
3. What are your favorite foods?
4. What do you like to do for fun that is also exercise? 
5. Do you have any pets? (circle your answer) Yes No 
6. If yes, what kinds of animals do you have?

        </div>



      </div>
    );
  }
}

export default Page11;
