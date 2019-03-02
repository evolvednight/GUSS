import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Navbar fixed="top" variant="dark" className="navbar">
        <div className="logo">
          <Link to="/">SOPHIA'S STORYBOOK</Link>
        </div>
      </Navbar>
    );
  }
}
export default Navigation;
