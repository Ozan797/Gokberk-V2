import styles from "./Home.module.css";
// import Clouds from "../../assets/Cloudy.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";
import RedirectButton from "../../components/Button/RedirectButton";

const Home = () => {
  return (
    <>
      <section id="landing" className={styles.home}>
        <div className={styles.container}>
          <h3 className={styles.head}>
            <Typewriter
              options={{
                strings: ["Hello, my name is", "Merhaba, benim adim"],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </h3>
          <h1 className={styles.title}>Ozan Gokberk</h1>
          <p className={styles.titleDesc}>
            Im Ozan, a skilled software engineer specialized in Fullstack
            development and proficient in Typescript, NestJS, ReactJS, and
            Python. My passion lies at the crossroads of Web development
            innovation and AI development along with blockchain technology,
            where I craft cutting-edge solutions that redefine technological
            possibilities.
          </p>

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <RedirectButton buttonText="View Projects" url="/projects" />
            <RedirectButton buttonText="View Experience" url="/experience" />
            <RedirectButton buttonText="Contact Me" url="mailto:ozan8@hotmail.co.uk?subject= Hey Ozan!" />

            <a
              href="https://github.com/Ozan797"
              target="_blank"
              rel="noreferrer"
              id={styles.link}
            >
              <GitHubIcon className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/ozan-gokberk-bb6939240/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={styles.icon} />
            </a>
          </div>
        </div>
        {/* <div className={styles.clouds}>
          <img src={Clouds} alt="Image of clouds" />
        </div> */}
      </section>
    </>
  );
};

export default Home;
