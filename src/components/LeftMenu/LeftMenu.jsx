import "./LeftMenu.css";
import InboxList from "./InboxList";
import ToggleItem from "./ToggleItem";

const LeftMenu = () => {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <InboxList />
          <ToggleItem />
      </ul>
    </nav>
  );
};

export default LeftMenu;
