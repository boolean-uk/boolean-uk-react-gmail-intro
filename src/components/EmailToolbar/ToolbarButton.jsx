import PropTypes from 'prop-types';

const ToolbarButton = ({ src, alt }) => (
  <li>
    <img className="icon" src={src} alt={alt} />
  </li>
);

ToolbarButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ToolbarButton;