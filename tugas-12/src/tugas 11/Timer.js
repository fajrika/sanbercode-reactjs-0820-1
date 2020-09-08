import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Clock from "./Clock";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: parseInt(props.time),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    if (this.state.time === 0) {
      clearInterval(this.timerID);
      unmountComponentAtNode(document.getElementById("root"));
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: this.state.time - 1,
    });
  }
  render() {
    return (
      <div>
        <h2>
          <span>
            sekarang jam : <Clock />
          </span>
          <span className="f-right">hitung mundur : {this.state.time}</span>
        </h2>
      </div>
    );
  }
}

export default Timer;
