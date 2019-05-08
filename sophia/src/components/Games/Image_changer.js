import React, { Component } from "react";
import ReactDOM from "react-dom";
import marker from "./marker.png";
import transparent from "./sofia_solid.png";

const imagesPath = {
    plus: transparent,
    minus: marker
  }
  
  class App extends React.Component {
    state = {
      open: true
    }
    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))
    }
  
    getImageName = () => this.state.open ? 'plus' : 'minus'
  
    render() {
      const imageName = this.getImageName();
      return (
        <div>
          <img style={{maxWidth: '50px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
        </div>
      );
    }
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
export default App;

