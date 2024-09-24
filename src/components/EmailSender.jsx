import React from 'react'
import backArrow from '../assets/icons/back-arrow.png'
import dots from '../assets/icons/dots.png'
import popup from '../assets/icons/new-window.png'
import a from '../assets/icons/letter-a.png'
import link from '../assets/icons/link.png'
import laugh from '../assets/icons/laugh.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import '../styles/EmailSender.css'

const EmailSender = () => {
  return (
    <div className="email-sender-container">
      <div className="avatar"></div>
      <div className='email-creator'>
        <div className='upper'>
          <div className='left'>
              <img className="icon-upper" src={backArrow} alt="reply button" />
              <img className="icon" src={dots} alt="dots side" />
              <div className='dots-side'></div>
            </div>
            <div className='middle'>
              <text className='text'>Write here</text>
            </div>
            <div className='right'>
              <img className='icon' src={popup} alt='pop up'></img>
            </div>
          </div>

          <div className='bottom'>
            <section className="email-actions">
              <button>Send</button>
            </section>
            <div className='bottom-left'>
              <img className='icon' src={a} alt='A'></img>
              <img className='icon' src={link} alt='Link'></img>
              <img className='icon' src={laugh} alt='Smileys'></img>
            </div>

            <div className='bottom-right'>
              <img className='icon' src={rubbishButton} alt='Delete button'></img>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default EmailSender;