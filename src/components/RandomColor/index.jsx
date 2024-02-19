import { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColorChange() {
    //#000000
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleRgbColorChange() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      className="main "
      style={{
        width: "100vh",
        height: "100vh",
        background: color,
        border: "2px solid black",
      }}
    >
      <div className="btns">
        <button
          onClick={() => setTypeOfColor("hex")}
          id="hex"
          className="btn  "
        >
          Create HEX Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} id="rgb" className="btn ">
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex" ? handleHexColorChange : handleRgbColorChange
          }
          id="generate "
          className="btn"
        >
          Generate Random Color
        </button>
      </div>

      <div className="div ">
        <h1>{typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h1>
        <h2>{color} </h2>
      </div>
    </div>
  );
}
