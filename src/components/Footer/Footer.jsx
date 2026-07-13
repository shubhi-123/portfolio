import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Shubhi Narwaria</p>
      <p className={styles.tagline}>Built with curiosity.</p>
    </footer>
  );
}

export default Footer;