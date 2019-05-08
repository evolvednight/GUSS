import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page31 extends Component {
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
      <div className="Page31">
      <div className="one">
      </div>
        <div className="text">
        <p>
        Participant: A person that agrees to be in a study. Placebo: A pretend
          medicine with nothing in it that is used to help find out if a new
          medicine works. Doctors and scientists use it to make sure that if a
          patient starts to feel better it is because of the medicine and not
          because of something else. 
        </p>
        <p>
        Research: The way a scientist finds out the
          answers to questions. Research can be observing, experimenting, or
          even just reading about what other people have done. It helps us find
          better ways to do things like treat illnesses.
          </p>
          <p>
          Research Study: A lot
          like a science experiment. We start with a question that we want to
          answer, like what happens when we combine vinegar and baking soda.
          Then we carefully try it out. We watch and listen to what happens and
          we write it down. Then we have an answer to our question!
          </p>
          <p>
          Sample: A
          sample can mean a small amount of something. It can also mean a group
          of people chosen from a larger group of people to be part of a study.
          A researcher may say they want to take a sample of your blood. This
          means they would take a very small amount out with a needle in order
          to study it under a microscope. 
          </p>
          <p>
          Science Experiment: Anything that you
          do to help you answer a question. This may involve using your eyes,
          your ears, your nose, and your sense of touch to learn about
          something. It involves careful planning. It also involves writing
          everything down. This helps the scientists remember everything that
          happens.
          </p>

        </div>
        
        <Link to="/page30" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page32" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            autoFocus
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        <Button onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page31;
