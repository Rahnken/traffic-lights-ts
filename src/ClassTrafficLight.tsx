import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    activeLight: 0,
  };
  lights = [{ colour: "red" }, { colour: "yellow" }, { colour: "green" }];

  nextLight = () => {
    if (this.state.activeLight === this.lights.length - 1) {
      this.setState({ activeLight: 0 });
    } else {
      this.setState({ activeLight: this.state.activeLight + 1 });
    }
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {this.lights.map((light, index) => {
            return (
              <div
                key={index}
                className={`circle ${
                  this.state.activeLight === index ? light.colour : "black"
                }`}
              ></div>
            );
          })}
        </div>
        <button className="next-state-button" onClick={this.nextLight}>
          Next State
        </button>
      </div>
    );
  }
}
