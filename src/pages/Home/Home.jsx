import React from "react";
import styles from "./Home.module.css";
import Clouds from "../../assets/Cloudy.svg";

const Home = () => {
  return (
    <>
      <section id="landing" className={styles.home}>
        <div className={styles.container}>
          <h3 className={styles.head}>Hello, my name is </h3>
          <h1 className={styles.title}>Ozan Gokberk</h1>
          <p className={styles.titleDesc}>
            I'm Ozan, a skilled software engineer specialized in blockchain
            technology and proficient in Typescript, NestJS, ReactJS, and
            Python. My passion lies at the crossroads of blockchain innovation
            and AI development along with web development, where I craft
            cutting-edge solutions that redefine technological possibilities.
          </p>

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <button>
              <a href="/projects">View Projects</a>
            </button>
            <button>
              <a href="/experience">View Experience</a>
            </button>
          </div>
        </div>
        <div className={styles.clouds}>
          <img src={Clouds} alt="Image of clouds" />
        </div>
      </section>
    </>
  );
};

export default Home;
