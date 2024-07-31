import React from "react";
import { AddToCart } from "./AddToCart";
import style from "./ProductCard.module.css";

// Server Side Rendering
const ProductCard = () => {
  return (
    <div className={style.cardProduct}>
      {/* console.log("This code is running in sever console"); */}
      <AddToCart />
    </div>
  );
};

export default ProductCard;
