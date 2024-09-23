import './EmailToolbar.css';
import ToolbarButton from './ToolbarButton';
import Pagination from './Pagination';
import backArrow from '../../assets/icons/back-arrow.png';
import downloadButton from '../../assets/icons/download-button.png';
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png';

const EmailToolbar = () => (
  <nav className="email-toolbar">
    <ul>
      <ToolbarButton src={backArrow} alt="reply button" />
      <ToolbarButton src={downloadButton} alt="archive button" />
      <ToolbarButton src={rubbishButton} alt="delete button" />
    </ul>
    <div className="space"></div>
    <Pagination />
  </nav>
);

export default EmailToolbar;