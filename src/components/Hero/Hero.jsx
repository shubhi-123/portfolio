import styles from "./Hero.module.css";

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
      </div>
    </section>
  );
}

export default Hero;