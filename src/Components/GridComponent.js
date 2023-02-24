import React from "react";
import "./GridComponent.scss";

function GridComponent({ posts }) {
  const tableHtml =
    posts.length &&
    posts.map((item) => (
      <>
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
      </>
    ));
  return (
    <>
      <table id="customers">
        <tr>
          <th>Post ID</th>
          <th>Post Title</th>
          <th>Post Body</th>
        </tr>
        {tableHtml}
      </table>
    </>
  );
}

export default GridComponent;
