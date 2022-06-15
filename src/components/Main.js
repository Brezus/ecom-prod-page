import React from "react";
import AboutShoe from "./AboutShoe";
import DisplayShoe from "./DisplayShoe";

export default function Main({ count }) {
  return (
    <div>
      <AboutShoe logic={count} />
      <DisplayShoe />
    </div>
  );
}
