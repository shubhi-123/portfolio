import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
  Hi! I'm <span>Shubhi Narwaria.</span>
</h1>

        <p>
          I'm a third-year B.Tech student in Information Technology at the
          Indian Institute of Information Technology, Bhopal, with a strong
          interest in Machine Learning, Artificial Intelligence, and Data
          Science. I enjoy building machine learning models, exploring
          practical applications of data, and turning ideas into meaningful
          projects. My aim is to build intelligent solutions that matter.
        </p>
      </div>
    </section>
  );
}

export default Hero;