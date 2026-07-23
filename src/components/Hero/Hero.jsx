import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi! I'm</p>

        <h1 className={styles.name}>
          Shubhi Narwaria.
        </h1>

        <p className={styles.description}>
          I'm a third-year B.Tech student in Information Technology at the
          Indian Institute of Information Technology, Bhopal, with a strong
          interest in Machine Learning, Artificial Intelligence, and Data
          Science. I enjoy building machine learning models, exploring
          practical applications of data, and turning ideas into meaningful
          projects. My aim is to build intelligent solutions that matter.
        </p>
<div className={styles.socialLinks}>

  {/* <div className={styles.iconWrapper}>
    <span className={styles.tooltip}>Resume</span>
    <a
      href={`${import.meta.env.BASE_URL}Shubhi_IIITB_Resume.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Resume"
    >
      <HiOutlineDocumentText />
    </a>
  </div> */}

  <div className={styles.iconWrapper}>
    <span className={styles.tooltip}>LinkedIn</span>
    <a
      href="https://www.linkedin.com/in/shubhi-narwaria/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
  </div>

  <div className={styles.iconWrapper}>
    <span className={styles.tooltip}>GitHub</span>
    <a
      href="https://github.com/shubhi-123"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
  </div>

</div>
      </div>
    </section>
  );
}

export default Hero;

