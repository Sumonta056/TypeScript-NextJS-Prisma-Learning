import React from "react";
import { AddToCart } from "./AddToCart";

// Server Side Rendering
const ProductCard = () => {
  return (
    <div>
      console.log("This code is running in sever console");
      <AddToCart />
    </div>
  );
};

export default ProductCard;
