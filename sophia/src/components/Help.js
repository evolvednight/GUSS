import React, { Component } from "react";
import "./Help.css";
import { Navbar, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Help extends Component {
  render() {
    return (
      <div className="help">
        <Navbar fixed="top" variant="dark" className="navbar">
          <div className="logo">
            {" "}
            <Link to="/">SOPHIA'S STORYBOOK</Link>
          </div>
        </Navbar>

        {/* 3 helper Cards */}

        <CardDeck className="helper-cards">
          {/* 1st helper Card */}

          <Card className="helper">
            <Card.Header className="helper-header helper-header-1">
              START STORY
            </Card.Header>
            <Card.Body className="helper-1">
              <Card.Text>PRESS THIS BUTTON TO START THE STORYBOOK</Card.Text>
            </Card.Body>
          </Card>

          {/* 2nd helper Card */}

          <Card className="helper">
            <Card.Header className="helper-header helper-header-2">
              SKIP PAGES
            </Card.Header>
            <Card.Body className="helper-2">
              <Card.Text>PRESS THIS BUTTON TO SKIP TO ACTIVITIES</Card.Text>
            </Card.Body>
          </Card>

          {/* 3rd helper Card */}

          <Card className="helper">
            <Card.Header className="helper-header helper-header-3">
              ACTIVITIES
            </Card.Header>
            <Card.Body className="helper-3">
              <Card.Text>
                YOU NEED TO COMPLETE CERTAIN ACTIVITIES THROUGHOUT THE BOOK TO
                PROGRESS THE STORY
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 4th helper Card */}

          <Card className="helper">
            <Card.Header className="helper-header helper-header-4">
              ARROWS
            </Card.Header>
            <Card.Body className="helper-4">
              <Card.Text>
                THESE BUTTONS HELP YOU NAVIGATE TO THE NEXT AND PREVIOUS PAGES
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Help;
