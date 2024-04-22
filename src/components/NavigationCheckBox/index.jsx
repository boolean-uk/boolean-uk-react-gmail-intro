export default function NavigationCheckBox(props) {
    return(
        <li className="item toggle">
        <label htmlFor="hide-read">{props.text}</label>
        <input id="hide-read" type="checkbox" checked={props.checked} />
      </li>
    )
}