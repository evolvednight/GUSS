import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_6.JPG";
import { Link } from "react-router-dom";
class Page6 extends Component {
  render() {
    return (
      <div className="Page6">
       

        <div className="text">
          Dr. Q saw that Sofia seemed nervous. She said “Do you have questions
          about research? It is a lot more than rats in mazes! Research can help
          us learn how to treat illnesses. Sometimes it helps us understand what
          people think about things in the world around them. And sometimes
          research helps us make better medicine. Kids need different medicine
          than adults. Your bodies are different, and they think differently
          too! We need to make sure those medicines work.” Sofia liked the idea
          of helping other kids. But she was still nervous. Her dad looked
          nervous too. Dr. O said, “Please. Let's talk about research first.
          What do you want to know? I am happy to answer any of your questions.”
          “So what IS a research study?" was the first thing Sofia blurted out.
        </div>
        <img src={Image} alt="" />
        <Link to="/page5">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page7">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page6;
