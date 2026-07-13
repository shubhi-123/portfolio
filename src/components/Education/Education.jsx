import styles from "./Education.module.css";

function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.container}>
        {/* College */}

        <div className={styles.collegeCard}>
          <h3>B.Tech in Information Technology</h3>

          <div className={styles.content}>
            <p className={styles.institute}>
              Indian Institute of Information Technology, Bhopal
            </p>

            <p className={styles.subtitle}>
              (IIIT Bhopal)
            </p>

            <p className={styles.duration}>
              2024 – Present &nbsp; | &nbsp; Current CGPA: 7.97
            </p>
          </div>
        </div>

        {/* School */}

        <div className={styles.schoolCard}>
          <h3>Delhi International School, Indore</h3>

          <div className={styles.content}>

            <div className={styles.schoolRow}>
              <span>Class XII</span>
              <span className={styles.score}>84.8%</span>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.schoolRow}>
              <span>Class X</span>
              <span className={styles.score}>93.8%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;