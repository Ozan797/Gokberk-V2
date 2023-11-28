import styles from "./Projects.module.css";
import MainProject from "../../components/MainProject/MainProject";
import Img from "../../assets/react.svg"
const Projects = () => {
  return (
    <section id={styles.projects}>
      <MainProject
        projRank="Main Project"
        projName="JobifyHub"
        projDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur, animi cumque necessitatibus in recusandae totam
            repudiandae corporis sequi, sapiente saepe alias rem ipsam adipisci
            commodi corrupti, tempora quos tenetur quas?"
        techStack="Nestjs, ReactJS"
        videoLink="dsd"
        projectImg="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </section>
  );
};

export default Projects;
