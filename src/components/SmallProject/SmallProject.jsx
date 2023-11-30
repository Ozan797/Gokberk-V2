import styles from "./SmallProject.module.css";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import PropTypes from "prop-types";
import TechIcon from "../TechIcon/TechIcon";
import LaunchIcon from "@mui/icons-material/Launch";

const SmallProject = ({
  projectTitle,
  projectDesc,
  projectTS,
  githubLink,
  videoLink,
  websiteLink,
}) => {
  SmallProject.propTypes = {
    projectTitle: PropTypes.string,
    projectDesc: PropTypes.string,
    projectTS: PropTypes.string,
    projectImg: PropTypes.string,
    githubLink: PropTypes.string,
    videoLink: PropTypes.string,
    websiteLink: PropTypes.string,
  };
  const icon = {
    width: "50px",
    height: "50px",
    color: "#009dab"
  };
  const link = {
    width: "30px",
    height: "30px",
    marginRight: "10px"
  }
  return (
    <div className={styles.card}>
      <span className={styles.header}>
        <FolderCopyOutlinedIcon style={icon} />
        <div className={styles.links}>
          <a href={githubLink} target="_blank" rel="noreferrer"><GitHubIcon style={link}/></a>
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noreferrer">
              <LaunchIcon />
            </a>
          )}
          {videoLink && (
            <a href={videoLink}>
              <YouTubeIcon />
            </a>
          )}
        </div>
      </span>
      <h1 className={styles.title}>{projectTitle}</h1>
      <p className={styles.projectDesc}>{projectDesc}</p>
      <p className={styles.projectTS}><TechIcon text={projectTS}/></p>
    </div>
  );
};

export default SmallProject;
