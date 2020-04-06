import React from "react";
import _ from "lodash";
import WikiCard from "./components/wikiCard";
import { wikipediaSearch } from "./api";

class DebounceView extends React.Component {
  state = {
    inputValue: "",
    result: [],
    isLoading: false
  };

  handleValue = value => {
    this.setState({ inputValue: value, isLoading: true });
    this.requestData(value);
  };

  requestData = _.debounce(value => {
    wikipediaSearch(value).then(data => {
      this.setState({
        result: data,
        isLoading: false
      });
    });
  }, 300);

  render() {
    return (
      <section>
        <label>Debounce Search</label>
        <input
          placeholder="Start typing"
          value={this.state.debounceInput}
          onChange={event => this.handleValue(event.target.value)}
        />
        {this.state.result &&
          Object.values(this.state.result).map(wiki => {
            return <WikiCard wiki={wiki} />;
          })}
        {!this.state.isLoading &&
          !this.state.result && (
            <p>
              No data
              <span style={{ fontSize: 30 }}>😢</span>
            </p>
          )}
      </section>
    );
  }
}

export default DebounceView;
