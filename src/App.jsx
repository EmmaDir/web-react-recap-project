import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  // const [colorToEdit, setColorToEdit] = useState({});

  // function handleConfirmEdit() {
  //   console.log("Color changed!");
  // }
  // const colorBefore = (idToEdit) => {
  //   colors.map((color) => {
  //     color.id === idToEdit;
  //   });
  // };

  // const [colorToEdit, setColorToEdit] = useState(colorBefore);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  function handleConfirmDelete(idToDelete) {
    setColors(colors.filter((color) => color.id !== idToDelete));
  }

  function handleConfirmEdit(idToEdit, updatedColor) {
    setColors(
      colors.map((color) => {
        color.id === idToEdit ? { ...color, ...updatedColor } : color;
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        onSubmitColor={handleAddColor}
        buttonText={"ADD COLOR"}
        // actionType={"add"}
      />
      {colors.map((color) => {
        // console.log(color.id);
        return (
          <Color
            key={color.id}
            color={color}
            onConfirmDelete={handleConfirmDelete}
            onConfirmEdit={handleConfirmEdit}
            // actionType={"update"}
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
