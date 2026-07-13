import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.underline}></div>

        <p className={styles.description}>
          My interest in Machine Learning began with a simple curiosity 
          about how a model, once trained, could learn from data and 
          perform tasks in ways that resemble human intelligence. 
          That curiosity gradually evolved into a deeper interest 
          in understanding how machine learning models are trained, 
          how they make predictions, and how they can be applied 
          to solve meaningful problems.
        </p>
        <p className={styles.description}>
          Most of my learning has come through self-study, 
          experimentation, and building projects. 
          I enjoy understanding concepts from the ground up 
          and learning through implementation. As I continue 
          to learn, I look forward to contributing 
          to intelligent solutions that matter.
        </p>

      </div>
    </section>
  );
}

export default About;