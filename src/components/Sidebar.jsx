import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="inbox-list">
      <div className="item active">Inbox</div>
      <div className="item">Sent</div>
      <div className="item">Drafts</div>
    </div>
  </div>
);

export default Sidebar;
