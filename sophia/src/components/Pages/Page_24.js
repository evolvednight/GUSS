import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_24.JPG";
import { Link } from "react-router-dom";
class Page24 extends Component {
  render() {
    return (
      <div className="Page24">
      

        <div className="text">
          Sofia didn't like needles, but she did like being healthy. Dr. Q
          seemed like someone she could trust. She answered her questions and
          was very friendly. Then Sofia started to worry about how often
          "sometimes” was. She liked to hang out with her friends and didn't
          want to miss anything because of research! She frowned a little bit.
          She also was worried about how she would explain it to her friends.
          Dr. Q noticed Sofia's sad face. She asked “Sofia, are you a little
          worried about being too busy? Sofia nodded, “Yes. And I'm also worried
          about how to tell my friends about this when they ask about it.”
        </div>
        <img src={Image} alt="" />
        <Link to="/page23" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page25" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page24;
