import styles from "./Experience.module.css";
import MRHB from "../../assets/MRHB Logo.png";
import ExperienceList from "../../components/Experience/ExperienceList";
const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h1>
        <img
          src={MRHB}
          alt="Logo for MRHB.Network"
          className={styles.mrhbLogo}
        />
        <span className="highlight">MRHB.Network</span>
      </h1>
      <h3>1 Year Placement (June 2023 - Present) </h3>
      <h4 className="highlight">Software Engineer Intern</h4>
      <ExperienceList />
    </section>
  );
};

export default Experience;
