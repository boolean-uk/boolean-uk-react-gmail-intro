import downloadButton from '../../../assets/icons/download-button.png'
import rubbishButton from '../../../assets/icons/rubbish-bin-delete-button.png'
import backArrow from '../../../assets/icons/back-arrow.png'
import '../../../styles/Email-toolbar.css'

function EmailToolBar () {
    return (
    <>
    <nav className="email-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
    </>
    )
}

export default EmailToolBar