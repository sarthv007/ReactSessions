import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      Welcome to Product Component
      <Link to={"product/1"}>
        <h2>Product1 </h2>
      </Link>
      <Link to={"product/2"}>
        <h2>Product2 </h2>
      </Link>
      <Link to={"product/3"}>
        <h2>Product3 </h2>
      </Link>
      <nav>
        <Link to="featured">Featured</Link>||
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
