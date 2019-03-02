import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Page1 from "./components/Pages/Page_1";
import Page2 from "./components/Pages/Page_2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "./components/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Navigation Bar */}

        <Navigation />
        <div className="App">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={50}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/About" component={About} />
                    <Route path="/Help" component={Help} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
