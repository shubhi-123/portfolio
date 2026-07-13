import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.underline}></div>

        <p className={styles.text}>
          I'm always open to discussing opportunities.
        </p>

        <div className={styles.links}>

          <a
            href="mailto:shubhi.narwaria@gmail.com"
            className={styles.link}
          >
            <MdEmail className={styles.icon} />
            shubhi.narwaria@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/shubhi-narwaria/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin className={styles.icon} />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;