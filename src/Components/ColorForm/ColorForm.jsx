import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
// import { uid } from "uid";

export default function ColorForm({
  // onAddColor,
  // onConfirmEdit,
  buttonText,
  // actionType,
  onSubmitColor,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newColor = {
      // id: uid(),
      role: event.target.role.value,
      hex: event.target.hex.value,
      contrastText: event.target.contrastText.value,
    };
    onSubmitColor(newColor);
    // if (actionType === "add") {
    //   onAddColor(newColor);
    // } else if (actionType === "edit") {
    //   onConfirmEdit(newColor);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input id="role" name="role" type="text" placeholder="some color"></input>
      <ColorInput />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
