import './styles/WriteEmail.css'

import account from './assets/icons/account.png'
import attach from './assets/icons/attach.png'
import backArrow from './assets/icons/back-arrow.png'
import drive from './assets/icons/drive.png'
import font from './assets/icons/font.png'
import history from './assets/icons/history.png'
import image from './assets/icons/image.png'
import link from './assets/icons/link.png'
import openNew from './assets/icons/open-new.png'
import pen from './assets/icons/pen.png'
import smile from './assets/icons/smile.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function WriteEmail() {
  return (
    <div className="email-write">
      <div>
        <img className="icon" src={account}></img>
      </div>
      <div className='email-write-main'>
        <div className='email-write-header'>
          <img className="icon" src={backArrow}></img>
          <p>&#11206;</p>
          <p>Freepik Company (no-reply@freepik.com)</p>
          <img className="icon" src={openNew}></img>
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div className='email-write-toolbar'>
          <button className='email-write-toolbar-send'>Send</button>
          <button className='email-write-toolbar-arrow'>&#11206;</button>
          <ul>
            <li>
              <img className="icon" src={font}></img>
            </li>
            <li>
              <img className="icon" src={attach}></img>
            </li>
            <li>
              <img className="icon" src={link}></img>
            </li>
            <li>
              <img className="icon" src={smile}></img>
            </li>
            <li>
              <img className="icon" src={drive}></img>
            </li>
            <li>
              <img className="icon" src={image}></img>
            </li>
            <li>
              <img className="icon" src={history}></img>
            </li>
            <li>
              <img className="icon" src={pen}></img>
            </li>
            <li className="email-write-toolbar-bin">
              <img className="icon" src={rubbishButton}></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WriteEmail