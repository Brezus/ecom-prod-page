import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React, { useState } from "react";

function App() {
  const [itemCount, setItemCount] = useState(0);
  function addItem() {
    setItemCount((prevCount) => prevCount + 1);
  }
  function minusItem() {
    setItemCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <Nav />
      <Main item={{ itemCount, addItem, minusItem }} />
    </div>
  );
}

export default App;
