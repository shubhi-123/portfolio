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
    2024 – Present &nbsp; | &nbsp; CGPA: 7.97
</p>

<ul className={styles.coursework}>
  <li>Data Structures & Algorithms</li>
  <li>Computer Networks</li>

  <li>Object-Oriented Programming</li>
  <li>Linear Algebra</li>

  <li>Database Management Systems</li>
  <li>Probability and Statistics</li>

  <li>Operating Systems</li>
</ul>
          </div>
        </div>

        {/* School */}

        <div className={styles.schoolCard}>
          <div className={styles.schoolSection}>
            <h3>Class XII</h3>

            <div className={styles.content}>
              <p className={styles.schoolName}>
    Delhi International School, Indore
</p>

              <p className={styles.subtitle}>(CBSE)</p>

              <p className={styles.score}>84.8%</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.schoolSection}>
            <h3>Class X</h3>

            <div className={styles.content}>
              <p>Delhi International School, Indore</p>

              <p className={styles.subtitle}>(CBSE)</p>

              <p className={styles.score}>93.8%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;