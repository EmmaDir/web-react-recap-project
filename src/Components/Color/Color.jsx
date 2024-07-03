import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onConfirmDelete, onConfirmEdit }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editColor, setEditColor] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };

  const handleEditClick = () => {
    console.log(color.id);
    setEditColor(true);
  };

  const handleCancelEdit = () => {
    setEditColor(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!showConfirmation ? (
        <button type="button" onClick={handleDeleteClick}>
          DELETE
        </button>
      ) : (
        <div>
          <p>Really delete?</p>
          <button onClick={handleCancelClick}>CANCEL</button>
          <button onClick={() => onConfirmDelete(color.id)}>DELETE</button>
        </div>
      )}
      {!editColor ? (
        <button onClick={handleEditClick}>EDIT</button>
      ) : (
        <>
          <ColorForm
            buttonText={"UPDATE COLOR"}
            onSubmitColor={(updatedColor) =>
              onConfirmEdit(color.id, updatedColor)
            }
          />
          <button onClick={handleCancelEdit}>CANCEL</button>
        </>
      )}
    </div>
  );
}
