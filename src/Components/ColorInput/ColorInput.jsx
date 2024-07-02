import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput() {
  const [hexValue, setHexValue] = useState("#123456");
  const [contrastTextValue, setContrastTextValue] = useState("#ffffff");

  return (
    <>
      <label htmlFor="hex">Hex</label>
      <input
        id="hex"
        name="hex"
        type="text"
        value={hexValue}
        onChange={(event) => setHexValue(event.target.value)}
      ></input>
      <input
        id="hexColor"
        name="hexColor"
        type="color"
        value={hexValue}
        onChange={(event) => setHexValue(event.target.value)}
      ></input>
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        id="contrastText"
        name="contrastText"
        type="text"
        value={contrastTextValue}
        onChange={(event) => setContrastTextValue(event.target.value)}
      ></input>
      <input
        id="contrastTextColor"
        name="contrastTextColor"
        type="color"
        value={contrastTextValue}
        onChange={(event) => setContrastTextValue(event.target.value)}
      ></input>
    </>
  );
}
