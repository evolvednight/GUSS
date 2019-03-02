import React, { Component } from "react";
import Home from "./components/Home";
import Help from "./components/Help";
import About from "./components/About";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/Help" component={Help} />
          <Route path="/About" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
