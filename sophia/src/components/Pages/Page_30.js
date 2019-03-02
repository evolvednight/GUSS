import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page30 extends Component {
  render() {
    return (
      <div className="Page30">

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
        Focus Group: When a small group of people come together to talk about a topic that the scientist is interested in learning about. 
Hypothesis: A guess about how something might work or how two things may be related to each other. 
Illness: Makes a person feel sick. An illness can be anything from a cold or the flu to something that lasts longer, like asthma. 
Medicine: Something your parent or a doctor might give you to make you feel better when you're sick. There are different types of medicine, they can come in pills, liquids, creams, or even sprays so that they can be breathed in to your lungs. Sometimes medicines help fight off germs that make you sick. Other times they help get rid of pain like a headache or sore throat. Some medicines even replace an important chemical that may be missing in your body. Kids need different medicines than adults. 
Microscope: This is a tool that people use to allow them to see very small things. It can help you see things that you can not see with just your eyes. You look into the instrument through a lens (kind of like a magnifying glass). The object you are trying to see may have a light on under it to help you see it. You can see things like very small bugs. You can also look at samples of blood or skin to see how healthy they are. 
Observation: Watching and taking notes about how a treatment or intervention is working in a person. Scientists can learn a lot from observing. They can see how something works from month to month. They can see how someone is feeling before a treatment and after a treatment. 

        </div>
        <Link to= "/page29">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page31">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page30;
