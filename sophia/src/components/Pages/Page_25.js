import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_25.JPG";
import { Link } from "react-router-dom";
class Page25 extends Component {
  render() {
    return (
      <div className="Page25">
       

        <div className="text">
          Dr. Q said “Don't worry Sofia. We want to make sure the study works
          for you. Please tell us if the study has too many visits to the
          doctor's office. Tell us if the visits are at bad times for you. We
          will work with you to see what is best for you!" Dr. Q also said, “We
          can give you copies of a book we made to help your friends understand
          what you're helping us with. It's about a sister and brother who help
          with research studies. They become the Research Rangers who help solve
          problems and improve kids' health all over the world!" Sofia was
          feeling a lot better. Sofia's dad did too. He said, “Your mom is going
          to want to hear all about this too, Sofia! Maybe we can bring the book
          home today and you can tell her all about it."
        </div>
        <img src={Image} alt="" />
        <Link to="/page24" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page26" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page25;
