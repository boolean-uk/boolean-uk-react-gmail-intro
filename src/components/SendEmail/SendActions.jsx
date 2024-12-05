import ActionIconsLeft from "./actionIconsLeft";
import ActionIconsRight from "./ActionIconsRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SendActions = () => {
  return (
    <div className="send-email-actions">
      <button>
        Send
        <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faPaperPlane} />
      </button>
      <ActionIconsLeft />
      <ActionIconsRight />
    </div>
  );
};

export default SendActions;
