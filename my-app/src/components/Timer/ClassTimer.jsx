import React, { Component } from "react";
class ClassTimer extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    this.myInterVal = setInterval(() => {
      console.log("Hi Amir");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("cwum");
    clearInterval(this.myInterVal);
  }
  render() {
    return <div>hi</div>;
  }
}

export default ClassTimer;
