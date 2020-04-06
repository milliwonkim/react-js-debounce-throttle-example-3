import React from "react";
import _ from "lodash";

import "./styles.css";

class DefaultView extends React.Component {
  state = {
    timeoutCounter: [0],
    throttleCounter: [0],
    debounceCounter: [0]
  };

  setCounterState = (stateName, numbers) =>
    this.setState({
      [stateName]: [...numbers, _.last(numbers) + 1]
    });

  withTimeout = () =>
    setTimeout(
      () => this.setCounterState("timeoutCounter", this.state.timeoutCounter),
      1000
    );

  withDebounce = _.debounce(
    () => this.setCounterState("debounceCounter", this.state.debounceCounter),
    500
  );

  withThrottle = _.throttle(
    () => this.setCounterState("throttleCounter", this.state.throttleCounter),
    1000
  );

  render() {
    return (
      <section className="defaultView">
        <div>
          <button onClick={this.withTimeout}>Timeout</button>
          <div className="meter">{this.state.timeoutCounter.join(" ")}</div>
        </div>

        <div>
          <button onClick={this.withThrottle}>Throttle</button>
          <div className="meter">{this.state.throttleCounter.join(" ")}</div>
        </div>

        <div>
          <button onClick={this.withDebounce}>Debounce</button>
          <div className="meter">{this.state.debounceCounter.join(" ")}</div>
        </div>
      </section>
    );
  }
}

export default DefaultView;
