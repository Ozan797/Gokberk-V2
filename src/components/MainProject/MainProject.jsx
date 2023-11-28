import styles from "./MainProject.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";

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
          <a href="#">{githubLink}</a>
          {websiteLink && (
            <a href={websiteLink}>
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
        <img src={projectImg} alt="A image" /></div>
    </div>
  );
};

export default MainProject;
