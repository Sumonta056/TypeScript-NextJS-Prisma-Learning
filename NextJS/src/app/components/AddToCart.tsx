"use client";
import React from "react";

// Client Side Rendering
export const AddToCart = () => {
  return (
    <div>
      console.log("This code is running in Client Console");
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log("Working")}
      >
        Add to Cart
      </button>
    </div>
  );
};
