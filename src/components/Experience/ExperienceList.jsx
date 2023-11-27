import styles from "./ExperienceList.module.css"
const ExperienceList = () => {
  return (
    <div className={styles.experienceList}>
      <ol>
        <li>
          Blockchain Fundamentals:
          <ul>
            <li>
              Comprehensive understanding of decentralization, cryptographic
              hashing, consensus mechanisms, and smart contracts
            </li>
          </ul>
        </li>
        <li>
          Backend Development with NestJS:
          <ul>
            <li>Mastery of NestJS, a scalable Node.js framework</li>
            <li>
              Built robust backend systems using modular architecture and
              dependency injection
            </li>
            <li>
              Developed RESTful APIs, middleware, authentication systems, and
              optimized performance
            </li>
          </ul>
        </li>
        <li>
          Proficiency in TypeScript:
          <ul>
            <li>Extensive use of TypeScript for backend development</li>
            <li>Leveraged static typing for cleaner, more reliable code</li>
            <li>Enhanced team collaboration and reduced runtime errors</li>
          </ul>
        </li>
        <li>
          API Backend Integrations:
          <ul>
            <li>
              Designed and implemented robust API architectures for seamless
              system integrations
            </li>
            <li>
              Ensured compatibility, security, and efficient data transfer among
              services
            </li>
            <li>
              Optimized API performance, handled authentication, and maintained
              comprehensive documentation
            </li>
          </ul>
        </li>
        <li>
          Bug Fixing Across Diverse Scenarios:
          <ul>
            <li>
              Identified and resolved a wide range of software issues promptly
            </li>
            <li>
              Employed in-depth analysis and debugging for efficient
              problem-solving
            </li>
            <li>
              Addressed diverse problems, from intricate logic errors to
              performance bottlenecks, showcasing adaptability and
              resourcefulness
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default ExperienceList;
