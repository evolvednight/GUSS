import React, { Component } from "react";
import Home from "./components/Home";
import Transition from "./components/Transition"
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Navigation from "./components/Navigation";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Navigation/>
        <div className="App">
          <div className="nav">
          <NavLink exact to="/Page1" activeClassName="active">Page1</NavLink>
          <NavLink to="/Page2" activeClassName="active">Page2</NavLink>
          <NavLink to="/Home" activeClassName="active">Home</NavLink>
          </div>
          <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/Page1" component={Page1} />
                <Route path="/Page2" component={Page2} />
                <Route path="/Home" component={Home} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )} />
      </div>
      </Router>
    );
  }
}

export default App;
