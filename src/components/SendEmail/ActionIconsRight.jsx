import dots from "../../assets/icons/dots.png";
import trash from "../../assets/icons/rubbish-bin-delete-button.png";

const ActionIconsRight = () => {
  return (
    <div className="action-icons-right">
    <img src={dots} alt="More Options" className="icon" />
    <img src={trash} alt="Delete" className="icon" />
  </div>
  );
}

export default ActionIconsRight;
