import React, { Component } from "react";
class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("document title updating");
      document.title = `clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          count : {this.state.count}
        </button>
      </>
    );
  }
}

export default ClassCounter;
