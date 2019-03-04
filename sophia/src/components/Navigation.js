import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar fixed="top" variant="dark" className="navbar">
        <div className="logo">
          <Link to="/" style={{textDecoration: 'none'}}>SOPHIA'S STORYBOOK</Link>
        </div>
      </Navbar>
    );
  }
}
export default Navigation;
