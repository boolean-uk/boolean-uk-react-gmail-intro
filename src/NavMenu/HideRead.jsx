export default function HideRead() {
  return (
    <li className="item toggle">
      <label htmlFor="hide-read">Hide read</label>
      <input id="hide-read" type="checkbox" checked={false} />
    </li>
  );
}
