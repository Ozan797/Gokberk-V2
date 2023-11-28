import styles from "./Projects.module.css";
import MainProject from "../../components/MainProject/MainProject";

const Projects = () => {
  return (
    <section id={styles.projects}>
      <div className={styles.mainProject}>
        <MainProject
          projRank="Main Project"
          projName="JobifyHub"
          projDesc="JobifyHub is an online platform designed to connect job seekers with recruiters. It provides a space for users to post job listings and enables applicants to apply for available positions. The platform is developed using NestJS for the backend, React for the frontend, and MySQL as the database."
          techStack="Nestjs, ReactJS"
          githubLink="https://github.com/Ozan797/JobifyHub"
          videoLink="https://www.youtube.com/"
          projectImg="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div>
        <MainProject
          projRank="Main Project"
          projName="Hope Crest"
          projDesc="HopeCrest is a comprehensive project focusing on leveraging machine learning techniques to predict the survival of breast cancer patients post-surgery. With the aid of Python and popular libraries, this project analyzes a dataset comprising over 400 patient records, aiming to forecast patient survival following breast cancer treatment."
          techStack="Python, Jupyter Notebook"
          githubLink="https://github.com/Ozan797/HopeCrest"
          videoLink="https://www.youtube.com/"
          projectImg="https://images.unsplash.com/photo-1598885159329-9377168ac375?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
};

export default Projects;
