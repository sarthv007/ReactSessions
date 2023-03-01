import React, { Component } from "react";

export default class DocumentTitleComp extends Component {
  constructor(props) {
    super(props);
    this.interval = 0;
    this.state = {
      counter: 0,
      name: "",
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  componentDidMount() {
    console.log("ComponentDidMount called");
    document.title = `Counter: ${this.state.counter}`;

    this.interval = setInterval(() => {
      console.log(JSON.stringify(new Date()));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Updating document title");
      document.title = `Counter: ${this.state.counter}`;
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button onClick={this.incrementCounter}>
          Counter :{this.state.counter}
        </button>
      </div>
    );
  }
}
