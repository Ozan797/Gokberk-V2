import styles from "./Projects.module.css";
import MainProject from "../../components/MainProject/MainProject";
import SmallProject from "../../components/SmallProject/SmallProject";
const Projects = () => {
  return (
    <section id={styles.projects}>
      <div className={styles.mainProject}>
        <div className={styles.mainProjects}>
          <MainProject
            projRank="Main Project"
            projName="JobifyHub"
            projDesc="JobifyHub is an online platform designed to connect job seekers with recruiters. It provides a space for users to post job listings and enables applicants to apply for available positions. The platform is developed using NestJS for the backend, React for the frontend, and MySQL as the database."
            techStack="Nestjs, ReactJS, MySQL"
            githubLink="https://github.com/Ozan797/JobifyHub"
            videoLink="https://www.youtube.com/"
            projectImg="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div>
          <MainProject
            projRank="Main Project"
            projName="Hope Crest"
            projDesc="Hope Crest is a comprehensive project focusing on leveraging machine learning techniques to predict the survival of breast cancer patients post-surgery. With the aid of Python and popular libraries, this project analyzes a dataset comprising over 400 patient records, aiming to forecast patient survival following breast cancer treatment."
            techStack="Python, Jupyter Notebook"
            githubLink="https://github.com/Ozan797/HopeCrest"
            websiteLink="https://ozangokberk.com"
            projectImg="https://images.unsplash.com/photo-1598885159329-9377168ac375?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className={styles.smallProject}>
        <div className={styles.grid}>
          <SmallProject
            projectTitle="Portfolio V1"
            projectDesc="This is version 1 of my portfolio.
            I created it when I had little React Experience
            but managed to learn a lot through doing it"
            projectTS="ReactJS"
            githubLink="https://github.com/Ozan797/Ozan-Gokberk.git"
            websiteLink="https://www.ozangokberk.com/"
          />
          <SmallProject
            projectTitle="Password Generator"
            projectDesc="This is a password generator written in Python.
            It uses a 16 or 32 length character password thats composed of
            letters, numbers and symbols"
            projectTS="Python"
            githubLink="https://github.com/Ozan797/"
          />
          <SmallProject
            projectTitle="Discord Bot"
            projectDesc="This is a Discord bot using JavaScript.
          This is a bot for a server that can do various fun activities for the server members"
            projectTS="JavaScript"
            githubLink="https://github.com/Ozan797/"
          />
          <SmallProject
            projectTitle="Keylogger"
            projectDesc="Using Python I managed to create a Keylogger.
            Once the file is run all the users entered keystrokes are recorded"
            projectTS="Python"
            githubLink="https://github.com/Ozan797/Cyber-Security-Projects"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
