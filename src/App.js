import React from "react";

import { render } from "react-dom";
import DebounceView from "./DebounceView";
import DefaultView from "./DefaultView";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <DefaultView />
        <DebounceView />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
