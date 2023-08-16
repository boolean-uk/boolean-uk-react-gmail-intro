import '../../styles/left_menu.css'

function ActiveItem() {
  return (
    <li className="item active">
      <span className="label">Inbox</span>
      <span className="count">3</span>
    </li>
  )
}

export default ActiveItem