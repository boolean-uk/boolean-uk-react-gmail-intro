import React from 'react';
import '../styles/EmailActions.css';

const EmailActions = () => {
  const downloadIconUrl = new URL('../assets/icons/download-button.png', import.meta.url).href;
  const rateStarIconUrl = new URL('../assets/icons/rate-star-button.png', import.meta.url).href;
  const deleteIconUrl = new URL('../assets/icons/rubbish-bin-delete-button.png', import.meta.url).href;

  return (
    <div className="email-actions">
      <button>
        <img src={downloadIconUrl} alt="Download" className="icon" />
      </button>
      <button>
        <img src={rateStarIconUrl} alt="Rate" className="icon" />
      </button>
      <button>
        <img src={deleteIconUrl} alt="Delete" className="icon" />
      </button>
    </div>
  );
};

export default EmailActions;
