import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { prodId } = useParams();

  return <div>Product Details {prodId}</div>;
}

export default ProductDetails;
