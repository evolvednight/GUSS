import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";


class Navigation extends Component {
    render() {
        return (
        <Navbar fixed="top" variant="dark" className="navbar">
            <div className="logo">SOPHIA'S STORYBOOK</div>
        </Navbar>
        )
    }
}
export default Navigation;