export default function NavigationLink(props) {
    return (
        <li className={props.className}>   
        <span className="label">{props.text}</span>
        <span className="count">{props.count}</span>
    
      </li>
    )
}