import React from 'react';
import '../styles/LeftMenu.css';

const LeftMenu = () => (
  <div className="left-menu">
    <div className="inbox-list">
      <div className="item active">Inbox</div>
      <div className="item">Sent</div>
      <div className="item">Drafts</div>
    </div>
  </div>
);

export default LeftMenu;
