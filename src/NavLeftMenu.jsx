export default function NavLeftMenu(){
  return (
    <nav className="left-menu">
    <MenuList/>
  </nav>
  )
}

function MenuList(){
  return (
    <ul className="inbox-list">
      <InboxList></InboxList>
      <ItemList></ItemList>
      <HideRead></HideRead>
    </ul>
  )
}

function InboxList(){
  return (
    <li className="item active">
      <span className="label">Inbox</span>
      <span className="count">3</span>
    </li>
  )
}

function ItemList(){
  return (
    <li className="item">
      <span className="label">Starred</span>
      <span className="count">2</span>
    </li>
  )
}

function HideRead(){
  return (
    <li className="item toggle">
      <label htmlFor="hide-read">Hide read</label>
      <input id="hide-read" type="checkbox" checked={false} />
    </li>
  )
}