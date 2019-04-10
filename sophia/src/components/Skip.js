import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Skip extends Component {
  handleKeyPress = e => {
    let buttonName = e.target.className;
    let buttonNameSplit = buttonName.split(" ");
    if (e.keyCode === 40) {
      if (buttonNameSplit[0] === "btn_1") {
        this.refs.btn_2.focus();
      }
      if (buttonNameSplit[0] === "btn_2") {
        this.refs.btn_3.focus();
      }
      if (buttonNameSplit[0] === "btn_3") {
        this.refs.btn_4.focus();
      }
      if (buttonNameSplit[0] === "btn_4") {
        this.refs.btn_5.focus();
      }
      if (buttonNameSplit[0] === "btn_5") {
        this.refs.btn_6.focus();
      }
      if (buttonNameSplit[0] === "btn_6") {
        this.refs.btn_7.focus();
      }
      if (buttonNameSplit[0] === "btn_7") {
        this.refs.btn_8.focus();
      }
      if (buttonNameSplit[0] === "btn_8") {
        this.refs.btn_9.focus();
      }
    } else if (e.keyCode === 38) {
      if (buttonNameSplit[0] === "btn_2") {
        this.refs.btn_1.focus();
      }
      if (buttonNameSplit[0] === "btn_3") {
        this.refs.btn_2.focus();
      }
      if (buttonNameSplit[0] === "btn_4") {
        this.refs.btn_3.focus();
      }
      if (buttonNameSplit[0] === "btn_5") {
        this.refs.btn_4.focus();
      }
      if (buttonNameSplit[0] === "btn_6") {
        this.refs.btn_5.focus();
      }
      if (buttonNameSplit[0] === "btn_7") {
        this.refs.btn_6.focus();
      }
      if (buttonNameSplit[0] === "btn_8") {
        this.refs.btn_7.focus();
      }
      if (buttonNameSplit[0] === "btn_9") {
        this.refs.btn_8.focus();
      }
    }
  };

  render() {
    return (
      <div className="home">
        <div className="home-card">
          <Link to="/Page5" style={{ textDecoration: "none" }}>
            <Button
              onKeyDown={this.handleKeyPress}
              ref="btn_1"
              autoFocus
              variant="danger"
              className="btn_1"
            >
              MAZE
            </Button>
          </Link>
          <Link to="/Page8" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_2"
              onKeyDown={this.handleKeyPress}
              variant="warning"
              className="btn_2"
            >
              WORD FIND
            </Button>
          </Link>
          <Link to="/Page11" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_3"
              onKeyDown={this.handleKeyPress}
              variant="primary"
              className="btn_3"
            >
              SURVEY
            </Button>
          </Link>
          <Link to="/page13" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_4"
              onKeyDown={this.handleKeyPress}
              variant="info"
              className="btn_4"
            >
              MEASURE
            </Button>
          </Link>
          <Link to="/Page16" style={{ textDecoration: "none" }}>
            <Button
              onKeyDown={this.handleKeyPress}
              ref="btn_5"
              variant="danger"
              className="btn_5"
            >
              PICTURES
            </Button>
          </Link>
          <Link to="/Page20" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_6"
              onKeyDown={this.handleKeyPress}
              variant="warning"
              className="btn_6"
            >
              CROSSWORD
            </Button>
          </Link>
          <Link to="/Page22" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_7"
              onKeyDown={this.handleKeyPress}
              variant="primary"
              className="btn_7"
            >
              CODE
            </Button>
          </Link>
          <Link to="/page26" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_8"
              onKeyDown={this.handleKeyPress}
              variant="info"
              className="btn_8"
            >
              CONNECT
            </Button>
          </Link>
          <Link to="/page26" style={{ textDecoration: "none" }}>
            <Button
              ref="btn_9"
              onKeyDown={this.handleKeyPress}
              variant="info"
              className="btn_9"
            >
              RESEARCH
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Skip;
