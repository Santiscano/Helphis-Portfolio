import React from "react";
import "tailwindcss/tailwind.css";

const MyComponent = () => {
  return (
    <div className="relative w-500">
      <img
        src="https://via.placeholder.com/500x300"
        alt="placeholder image"
        className="w-full h-auto transition duration-500 ease-in-out"
      />
      <img
        src="https://placekitten.com/500/300"
        alt="kitten image"
        className="absolute top-0 left-0 opacity-0 w-full h-auto transition duration-500 ease-in-out"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 ease-in-out">
        <h1
          className="text-white text-3xl font-bold"
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Welcome to my Website
        </h1>
      </div>
    </div>
  );
};

export default MyComponent;
