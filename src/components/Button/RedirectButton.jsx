import PropTypes from "prop-types";

const RedirectButton = ({ buttonText, url }) => {
  RedirectButton.propTypes = {
    buttonText: PropTypes.string,
    url: PropTypes.string,
  };
  return (
    <button>
      <a href={url}>{buttonText}</a>
    </button>
  );
};

export default RedirectButton;
