import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm() {
  return (
    <form>
      <label htmlFor="role">Role</label>
      <input id="role" name="role" type="text"></input>
      <ColorInput />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
