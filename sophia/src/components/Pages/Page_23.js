import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_23.JPG";

class Page23 extends Component {
  render() {
    return (
      <div className="Page23">

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
        Sofia was pretty sure she understood. She said, “Okay, we have to tell you that it's okay for us to be in the study and you'll tell us if there are any bad things that could happen?" 
“Absolutely,” said Dr. O, “Can I tell you about my research study?” 
Sofia and Michael were excited, and said at the same time "Yes!” 
Dr. Q explained, “In my study, you will come into the doctor's office a little more than you usually do. We will sometimes do check-ups to make sure you are feeling okay. Sometimes, we might take a blood sample from you with a needle. Blood helps us learn about what's going on inside of you, so we know you're healthy inside and out! There are other tests that will help us with that too." 

        </div>
        <img src = {Image}/>



      </div>
    );
  }
}

export default Page23;
