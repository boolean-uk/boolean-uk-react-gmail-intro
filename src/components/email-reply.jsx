import "../styles/EmailReply.css"

// AI generated SVG icons
const icons = {
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  type: "M4 7V4h16v3M9 20h6M12 4v16",
  paperclip: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48",
  smile: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z",
  alertTriangle: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
  image: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 15l-5-5L5 21",
  clock: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2",
  edit2: "M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z",
  moreVertical: "M12 13a1 1 0 100-2 1 1 0 000 2zM12 6a1 1 0 100-2 1 1 0 000 2zM12 20a1 1 0 100-2 1 1 0 000 2z",
  trash2: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
};

const Icon = ({ name, className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={icons[name]} />
  </svg>
);

export default function EmailReply() {
  return (
    <div className="email-reply">
      <div className="user-info">
        <div className="avatar"></div>
        <div className="email">Dave Amos (dave.amos@gmail.com)</div>
      </div>
      <textarea className="email-input-field"></textarea>
      <div className="actions">
        <button className="send-button">
          <Icon name="send" className="icon" />
          Send
        </button>
        <div className="icon-group">
          <Icon name="type" className="icon" />
          <Icon name="paperclip" className="icon" />
          <Icon name="smile" className="icon" />
          <Icon name="alertTriangle" className="icon" />
          <Icon name="image" className="icon" />
          <Icon name="clock" className="icon" />
          <Icon name="edit2" className="icon" />
        </div>
        <div className="right-icons">
          <Icon name="moreVertical" className="icon" />
          <Icon name="trash2" className="icon" />
        </div>
      </div>
    </div>
  );
}
