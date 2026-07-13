import styles from "./Navbar.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className={styles.navbar}>
      <button
        className={styles.themeButton}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </button>

      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#profiles">Profiles</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;