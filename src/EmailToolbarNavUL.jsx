import downloadButton from './assets/icons/download-button.png'
import backArrow from './assets/icons/back-arrow.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'


export default function EmailToolbarNavUL () {
    return (<ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" />
        </li>
        <li>
          <img className="icon" src={downloadButton} alt="archive button" />
        </li>
        <li>
          <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
      </ul>)
}