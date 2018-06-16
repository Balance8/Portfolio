import React, { Component } from "react";
import { render } from "react-dom";
import Circles from "./Circles";
import CircleSelector from "./CircleSelector";
import "./index.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: "1"
    };
  }

  handleSelectedCircle = circle => {
    this.setState({ selectedCircle: circle });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">PROJECT 4 ASSESSMENT</header>
        <main>
          <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleSelectedCircle={this.handleSelectedCircle}
          />
          <Circles selectedCircle={this.state.selectedCircle} />
        </main>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
