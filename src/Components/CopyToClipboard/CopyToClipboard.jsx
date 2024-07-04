export default function CopyToClipboard({
  onCopyClick,
  color,
  textCopyButton,
}) {
  return (
    <button onClick={() => onCopyClick(color.hex)}>{textCopyButton}</button>
  );
}
