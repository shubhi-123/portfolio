import styles from "./Navbar.module.css";
import { FiSun } from "react-icons/fi";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button
        className={styles.themeButton}
        aria-label="Toggle theme"
      >
        <FiSun />
      </button>

      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;