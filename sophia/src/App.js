import React, { Component } from "react";
import Home from "./components/Home";
import Skip from "./components/Skip";
import About from "./components/About";
import Help from "./components/Help";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "./components/Navigation";
import Page1 from "./components/Pages/Page_1";
import Page2 from "./components/Pages/Page_2";
import Page3 from "./components/Pages/Page_3";
import Page4 from "./components/Pages/Page_4";
import Page5 from "./components/Pages/Page_5";
import Page6 from "./components/Pages/Page_6";
import Page7 from "./components/Pages/Page_7";
import Page8 from "./components/Pages/Page_8";
import Page9 from "./components/Pages/Page_9";
import Page10 from "./components/Pages/Page_10";
import Page11 from "./components/Pages/Page_11";
import Page12 from "./components/Pages/Page_12";
import Page13 from "./components/Pages/Page_13";
import Page14 from "./components/Pages/Page_14";
import Page15 from "./components/Pages/Page_15";
import Page16 from "./components/Pages/Page_16";
import Page17 from "./components/Pages/Page_17";
import Page18 from "./components/Pages/Page_18";
import Page19 from "./components/Pages/Page_19";
import Page20 from "./components/Pages/Page_20";
import Page21 from "./components/Pages/Page_21";
import Page22 from "./components/Pages/Page_22";
import Page23 from "./components/Pages/Page_23";
import Page24 from "./components/Pages/Page_24";
import Page25 from "./components/Pages/Page_25";
import Page26 from "./components/Pages/Page_26";
import Page27 from "./components/Pages/Page_27";
import Page28 from "./components/Pages/Page_28";
import Page29 from "./components/Pages/Page_29";
import Page30 from "./components/Pages/Page_30";
import Page31 from "./components/Pages/Page_31";
import Page32 from "./components/Pages/Page_32";
import Page33 from "./components/Pages/Page_33";

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
                    <Route path="/Skip_Pages" component={Skip} />
                    <Route path="/About" component={About} />
                    <Route path="/Help" component={Help} />
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                    <Route path="/Page4" component={Page4} />
                    <Route path="/Page5" component={Page5} />
                    <Route path="/Page6" component={Page6} />
                    <Route path="/Page7" component={Page7} />
                    <Route path="/Page8" component={Page8} />
                    <Route path="/Page9" component={Page9} />
                    <Route path="/Page10" component={Page10} />
                    <Route path="/Page11" component={Page11} />
                    <Route path="/Page12" component={Page12} />
                    <Route path="/Page13" component={Page13} />
                    <Route path="/Page14" component={Page14} />
                    <Route path="/Page15" component={Page15} />
                    <Route path="/Page16" component={Page16} />
                    <Route path="/Page17" component={Page17} />
                    <Route path="/Page18" component={Page18} />
                    <Route path="/Page19" component={Page19} />
                    <Route path="/Page20" component={Page20} />
                    <Route path="/Page21" component={Page21} />
                    <Route path="/Page22" component={Page22} />
                    <Route path="/Page23" component={Page23} />
                    <Route path="/Page24" component={Page24} />
                    <Route path="/Page25" component={Page25} />
                    <Route path="/Page26" component={Page26} />
                    <Route path="/Page27" component={Page27} />
                    <Route path="/Page28" component={Page28} />
                    <Route path="/Page29" component={Page29} />
                    <Route path="/Page30" component={Page30} />
                    <Route path="/Page31" component={Page31} />
                    <Route path="/Page32" component={Page32} />
                    <Route path="/Page33" component={Page33} />
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
