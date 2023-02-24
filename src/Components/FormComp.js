import axios from "axios";
import React, { Component } from "react";

export default class FormComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //post request with fetch
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     ...this.state,
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    //post request with axios
    const data = {
      ...this.state,
      userId: 1,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "Content-Type": "application/json",
        },
        data,
      })
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Title</p>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <p>Body</p>

            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
