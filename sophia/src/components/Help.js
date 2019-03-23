import React, { Component } from "react";
import "./Help.css";
import { CardColumns, Card } from "react-bootstrap";

class Help extends Component {
  render() {
    return (
      <div className="help">
        {/* 3 helper Cards */}

        <CardColumns className="helper-cards">
          {/* 1st helper Card */}

          <Card className="helper">
            <Card.Header className="helper-header helper-header-1">
              ACCESSIBILITY WITH KEYBOARD
            </Card.Header>
            <Card.Body className="helper-1">
              <Card.Text>
                ALL THE BUTTONS ON THIS WEB APP ARE ACCESSIBLE WITH A KEYOARD.
                USING THE ARROWKEYS ON YOUR KEYBOARD, YOU CAN NAVIGATE THROUGH
                THE BUTTONS AND BY PRESSING "enter" ON YOUR KEYBOARD YOU CAN
                ACCESS THE BUTTONS. YOU CAN NOTICE THE BUTTON COLORS CHANGING TO
                GREEN TO SHOW THAT YOU ARE HIGHLIGHTING A CERTAIN BUTTON.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="helper">
            <Card.Header className="helper-header helper-header-1">
              START STORY BUTTON
            </Card.Header>
            <Card.Body className="helper-1">
              <Card.Text>
                CLICK THIS BUTTON TO START THE STORYBOOK. OR IF THE BUTTON IS
                HIGHLIGHTED (THE COLOR WILL TURN GREEN) YOU CAN PRESS "enter" TO
                ACCESS IT. IF THE BUTTON IS NOT HIGHLIGHTED AND YOU CAN'T ACCESS
                IT USING YOUR KEYBOARD, PRESS THE "tab" BUTTON ON YOUR KEYBOARD
                TWICE TO HIGHLIGHT THIS BUTTON
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 2nd helper Card */}

          <Card className="helper">
            <Card.Header className="helper-header helper-header-2">
              SKIP PAGES BUTTON
            </Card.Header>
            <Card.Body className="helper-2">
              <Card.Text>
                CLICK OR PRESS THIS BUTTON TO SKIP TO ACTIVITIES
              </Card.Text>
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
              NEXT PAGE BUTTON
            </Card.Header>
            <Card.Body className="helper-4">
              <Card.Text>
                CLICKING OR PRESSING THIS BUTTON WILL TAKE YOU TO THE NEXT PAGE.
                ON THE GAME PAGES, IT WILL ONLY TAKE YOU TO THE NEXT PAGE AFTER
                FINISHING THE GAME
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="helper">
            <Card.Header className="helper-header helper-header-4">
              PREV PAGE BUTTON
            </Card.Header>
            <Card.Body className="helper-4">
              <Card.Text>
                CLICKING OR PRESSING THIS BUTTON WILL TAKE YOU TO THE PREVIOUS
                PAGE. IF YOU CAN'T ACCES ANY OF THE BUTTONS ON THE STORYBOOK
                PAGES WITH YOUR KEYBOARD, PRESS THE "tab" KEY ON YOUR KEYBOARD
                ONCE. THIS BUTTON SHOULD BE HIGHLIGHTED
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="helper">
            <Card.Header className="helper-header helper-header-2">
              SOFIA'S STORYBOOK BUTTON
            </Card.Header>
            <Card.Body className="helper-2">
              <Card.Text>
                YOU CAN CLICK OR PRESS THIS BUTTON ANYTIME TO TAKE YOU BACK TO
                THE HOMEPAGE.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="helper">
            <Card.Header className="helper-header helper-header-3">
              "backspace" BUTTON ON YOUR KEYBOARD
            </Card.Header>
            <Card.Body className="helper-3">
              <Card.Text>
                YOU CAN PRESS THE "backspace" BUTTON ON YOUR KEYBOARD ANYTIME TO
                TAKE YOU BACK TO THE PREVIOUS PAGE
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Help;
