import React, { Component } from "react";
import FormComp from "./FormComp";
import FormComponent from "./FormComponent";
import GridComponent from "./GridComponent";
import axios from "axios";

export default class HttpRequestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    //fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     //console.log(data);
    //     this.setState({ posts: data });
    //   });
    //network request with axios
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   //console.log(response);
    //   this.setState({
    //     posts: response.data,
    //   });
    // });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {/* <GridComponent posts={posts} /> */}
        <FormComp />
      </div>
    );
  }
}
