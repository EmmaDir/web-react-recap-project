import { useState } from "react";
import "./Color.css";

export default function Color({ color, onConfirmDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
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
    </div>
  );
}
