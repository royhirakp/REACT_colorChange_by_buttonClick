import React, { useState } from "react";
import "./App2.css";
const App2 = () => {
  const [temp, setTemp] = useState(10);
  const [colur, setcolur] = useState({ first: -96, second: 129 });
  function functionPlus() {
    setTemp(temp + 1);
    let fst = colur.first;
    let sec = colur.second;
    setcolur({ ...colur, first: fst + 15, second: sec - 15 });
  }
  function functionminus() {
    setTemp(temp - 1);
    let fst = colur.first;
    let sec = colur.second;
    setcolur({ ...colur, first: fst - 15, second: sec + 15 });
  }
  console.log(colur);
  return (
    <div
      className="container"
      style={{
        maxWidth: "100vw",
        maxHeight: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="tempCalculator"
        style={{
          backgroundColor: `rgb(${colur.first}, ${colur.second}, ${colur.second})`,
        }}
      >
        <div className="display">
          <h1>{temp}°C</h1>
        </div>
        <div className="buttons">
          <button onClick={functionPlus}>+</button>
          <button onClick={functionminus}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App2;
