import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({ buttonText, onSubmitColor }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newColor = {
      role: event.target.role.value,
      hex: event.target.hex.value,
      contrastText: event.target.contrastText.value,
    };
    onSubmitColor(newColor);
    event.target.reset();
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
