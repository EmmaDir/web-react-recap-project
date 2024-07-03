import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  function handleConfirmDelete(idToDelete) {
    setColors(colors.filter((color) => color.id !== idToDelete));
  }

  function handleConfirmEdit(idToEdit, updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === idToEdit ? { ...color, ...updatedColor } : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} buttonText={"ADD COLOR"} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onConfirmDelete={handleConfirmDelete}
            onConfirmEdit={handleConfirmEdit}
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
