import styles from "./MainProject.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import PropTypes from "prop-types";

const MainProject = ({
  projRank,
  projName,
  projDesc,
  techStack,
  projectImg,
  githubLink,
  websiteLink,
  videoLink,
}) => {
  // Prop Validation
  MainProject.propTypes = {
    projRank: PropTypes.string,
    projName: PropTypes.string,
    projDesc: PropTypes.string,
    techStack: PropTypes.string,
    projectImg: PropTypes.string,
    githubLink: PropTypes.string,
    websiteLink: PropTypes.string,
    videoLink: PropTypes.string,
  };
  return (
    <div className={styles.container}>
      {/* Description side of project */}
      <div className={styles.projectInfo}>
        <div className={styles.projRank}>
          <h4>{projRank}</h4>
        </div>
        <div className={styles.projName}>
          <h1>{projName}</h1>
        </div>
        <div className={styles.projDesc}>
          <p>{projDesc}</p>
        </div>
        <div className={styles.techStack}>
          <p>{techStack}</p>
        </div>
        <div className={styles.links}>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
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
      </div>

      {/* Image side of main project */}
      <div className={styles.projectImg}>
        <img src={projectImg} alt="A image" />
      </div>
    </div>
  );
};

export default MainProject;
