import styles from "./Languages.module.css";

const languages = [
  {
    name: "English",
    level: "Professional working proficiency",
  },
  {
    name: "Hindi",
    level: "Native proficiency",
  },
  {
    name: "French",
    level: "Elementary proficiency",
  },
];

function Languages() {
  return (
    <section id="languages" className={styles.languages}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Languages</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {languages.map((language) => (
          <div className={styles.card} key={language.name}>
            <h3>{language.name}</h3>
            <p>{language.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;