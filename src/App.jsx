import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    setColors([newColor, ...colors]);
  }
  function handleConfirmDelete(idToDelete) {
    setColors(colors.filter((color) => color.id !== idToDelete));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onConfirmDelete={handleConfirmDelete}
          />
        );
      })}
      {colors.length === 0 ? (
        <p className="color-card-highlight">No colors.. start by adding one!</p>
      ) : null}
    </>
  );
}

export default App;
