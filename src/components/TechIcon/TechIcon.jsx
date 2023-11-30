import styles from "./TechIcon.module.css";
import PropTypes from "prop-types";

const TechIcon = ({ text }) => {
  TechIcon.propTypes = {
    text: PropTypes.string,
  };
  return <p className={styles.text}>{text}</p>;
};

export default TechIcon;
