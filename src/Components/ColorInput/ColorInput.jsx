import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput() {
  const [hexValue, setHexValue] = useState("");
  const [contrastTextValue, setContrastTextValue] = useState("");

  return (
    <>
      <label htmlFor="hex">Hex</label>
      <input id="hex" name="hex" type="text" value={hexValue} readOnly></input>
      <input
        id="hexColor"
        name="hexColor"
        type="color"
        onChange={(event) => setHexValue(event.target.value)}
      ></input>
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        id="contrastText"
        name="contrastText"
        type="text"
        value={contrastTextValue}
        readOnly
      ></input>
      <input
        id="contrastTextColor"
        name="contrastTextColor"
        type="color"
        onChange={(event) => setContrastTextValue(event.target.value)}
      ></input>
    </>
  );
}
