import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import press from './Sounds/press.mp3';
import sounds from './Sounds/page3.m4a';
class Page29 extends Component {
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
      <div className="Page29">
        <div className="text">
      <p>
      Glossary of Words 
          </p>
          <p>
Assent: A child's or teenager's agreement to be part
          of a study. 
</p>
          <p>
          Asthma (said like Az-muh): A disease that some people have
          that makes it hard for them to breathe sometimes. We use our lungs to
          breathe. Lungs are in our chest behind our ribs. Inside the lungs are
          tubes. These tubes carry the air in and out of our lungs. When someone
          has asthma, the tubes don't carry the air as well. The lungs get tight
          and make thick, sticky stuff called mucus. Mucus is kind of like snot.
          This makes it hard for the person to breathe and they feel like
          coughing.
</p>

<p>
Check-ups: Regular visits with the doctor to make sure that
          you are feeling okay and growing well. You might also have check-ups
          with a scientist if you are part of a research study. They want to see
          how you are doing and if you want to still be in the study. 
</p>
<p>
Clinical Trial: A study where researchers compare different treatments or
          medicines to figure out which ones work best. You might need to go see
          the doctor or scientist a little bit more often than normal for
          check-ups during this kind of study.
</p>
<p>
Consent: A person's agreement to
          be part of a study. If you are a kid or a teenager, your parents will
          have to sign a consent form for you to be in a study. Someone should
          explain everything about the study to you before you or your parents
          sign it.
</p>
<p>
      
Data: The information collected in a study. This can be
          numbers like age and height or words, like about how you feel. It can
          even be the notes scientists take from observations.
</p>





        </div>
        <Button onClick={this.play2} onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
        <Link to="/page28" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            onClick={this.play}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page30" style={{ textDecoration: "none" }}>
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

export default Page29;
