import Inbox from "./Inbox";
import Starred from "./Starred";
import HideRead from "./HideRead";
export default function NavElement() {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <Inbox />
        <Starred />
        <HideRead />
      </ul>
    </nav>
  );
}
