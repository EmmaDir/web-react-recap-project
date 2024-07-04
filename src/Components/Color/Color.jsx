import { useEffect, useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({
  color,
  onConfirmDelete,
  onConfirmEdit,
  // buttonText,
}) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [textCopyButton, setTextCopyButton] = useState("COPY");

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

  useEffect(() => {
    if (textCopyButton === "SUCCESSFULLY COPIED!") {
      const timeout = setTimeout(() => {
        setTextCopyButton("COPY");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [textCopyButton]);

  async function handleCopyClick(text) {
    await navigator.clipboard.writeText(text);
    setTextCopyButton("SUCCESSFULLY COPIED!");
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <CopyToClipboard
        onCopyClick={handleCopyClick}
        color={color}
        textCopyButton={textCopyButton}
      />
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
