import './SendEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPaperclip, faTrash } from '@fortawesome/free-solid-svg-icons';

const SendEmail = () => {

  return (
    <div className="send-email">
      <div className="send-email-header">
        <input
          type="text"
          placeholder="To"
        />
        <input
          type="text"
          placeholder="Subject"
        />
      </div>
      <textarea
        placeholder="Compose your email"
      />
      <div className="send-email-actions">
        <button >
          <FontAwesomeIcon icon={faPaperPlane} /> Send
        </button>
        <button>
          <FontAwesomeIcon icon={faPaperclip} /> Attach
        </button>
        <button>
          <FontAwesomeIcon icon={faTrash} /> Discard
        </button>
      </div>
    </div>
  );
};

export default SendEmail;