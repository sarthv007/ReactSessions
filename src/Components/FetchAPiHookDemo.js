import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

function FetchAPiHookDemo() {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts");

  const postHtml =
    data && data.length && data.map((post) => <li>{post.title}</li>);
  return (
    <div>
      <h2>Post data from API</h2>
      <ul>{postHtml}</ul>
    </div>
  );
}

export default FetchAPiHookDemo;
