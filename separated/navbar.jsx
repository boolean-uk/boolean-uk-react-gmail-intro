function Navbar() {
  return (
    <nav className="left-menu">
      <link rel="stylesheet" type="text/css" href="navbarStyles.css"></link>
      <ul className="inbox-list">
        <li className="item active">
          <span className="label">Inbox</span>
          <span className="count">3</span>
        </li>
        <li className="item">
          <span className="label">Starred</span>
          <span className="count">2</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input id="hide-read" type="checkbox" checked={false} />
        </li>
      </ul>
    </nav>
  );
}
