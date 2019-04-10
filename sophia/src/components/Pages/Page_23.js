import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_23.JPG";
import { Link } from "react-router-dom";
class Page23 extends Component {
  render() {
    return (
      <div className="Page23">
      

        <div className="text">
          Sofia was pretty sure she understood. She said, “Okay, we have to tell
          you that it's okay for us to be in the study and you'll tell us if
          there are any bad things that could happen?" “Absolutely,” said Dr. O,
          “Can I tell you about my research study?” Sofia and Michael were
          excited, and said at the same time "Yes!” Dr. Q explained, “In my
          study, you will come into the doctor's office a little more than you
          usually do. We will sometimes do check-ups to make sure you are
          feeling okay. Sometimes, we might take a blood sample from you with a
          needle. Blood helps us learn about what's going on inside of you, so
          we know you're healthy inside and out! There are other tests that will
          help us with that too."
        </div>
        <img src={Image} alt="image" />

        <div className="alt_text">
        Sofia and her brother both sitting on the counter, holding a pen with a smile while looking at Dr. Q. Sofia’s dad and Dr.Q watches the two while standing up.
        </div>
        <Link to="/page22" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page24" style={{textDecoration: 'none'}}> 
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page23;
