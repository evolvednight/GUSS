import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page3.m4a';
class Page30 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "Wow",
      play: false,
      pause: true,
    }
    this.audio = new Audio(press);
    this.audio2 = new Audio(sounds);
  }
  play = () => {
    if(this.state.play ==false )
    {
    this.setState({ play: true, pause: false });
    this.audio.play();
    }
    else
    {
    this.setState({ play: false, pause: true });
    this.audio.pause();
    this.audio.pause();
    this.audio2.pause();
    }
  }
    play2 = () => {
      if(this.state.play ==false )
      {
      this.setState({ play: true, pause: false });
      this.audio2.play();
      }
      else
      {
      this.setState({ play: false, pause: true });
      this.audio.pause();
      this.audio.pause();
      this.audio2.pause();
      }
    }
      pause = () => {
        this.setState({ play: false, pause: true })
          this.audio2.pause();
          this.audio.pause();
        }
  handleKeyPress = e => {
    let buttonName = e.target.className;
    let buttonNameSplit = buttonName.split(" ");
    if (e.keyCode === 39) {
      if (buttonNameSplit[0] === "leftBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.rightBtn.focus();
      }
    } else if (e.keyCode === 37) {
      if (buttonNameSplit[0] === "rightBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.leftBtn.focus();
      }
    }
  };
  render() {
    return (
      <div className="Page30">
      
        <div className="text">

      <p>
      Focus Group: When a small group of people come together to talk about
          a topic that the scientist is interested in learning about.
          Hypothesis: A guess about how something might work or how two things
          may be related to each other.
          </p>

          <p>
          Illness: Makes a person feel sick. An
          illness can be anything from a cold or the flu to something that lasts
          longer, like asthma. Medicine: Something your parent or a doctor might
          give you to make you feel better when you're sick. There are different
          types of medicine, they can come in pills, liquids, creams, or even
          sprays so that they can be breathed in to your lungs. Sometimes
          medicines help fight off germs that make you sick. Other times they
          help get rid of pain like a headache or sore throat. Some medicines
          even replace an important chemical that may be missing in your body.
          Kids need different medicines than adults. 
          </p>


      <p>
      Microscope: This is a tool
          that people use to allow them to see very small things. It can help
          you see things that you can not see with just your eyes. You look into
          the instrument through a lens (kind of like a magnifying glass). The
          object you are trying to see may have a light on under it to help you
          see it. You can see things like very small bugs. You can also look at
          samples of blood or skin to see how healthy they are. Observation:
          Watching and taking notes about how a treatment or intervention is
          working in a person. Scientists can learn a lot from observing. They
          can see how something works from month to month. They can see how
          someone is feeling before a treatment and after a treatment.
          </p>

        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <Link to="/page29" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page31" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            autoFocus
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
       
      </div>
    );
  }
}

export default Page30;
