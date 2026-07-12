import styles from "./Skills.module.css";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C++", "C", "SQL"],
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "SciPy",
      "Seaborn",
    ],
  },
  {
    category: "Web Development",
    skills: ["Flask", "React", "MySQL", "REST APIs"],
  },
  {
    category: "Cloud",
    skills: [
      "Google Cloud Platform",
      "Amazon Web Services",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.underline}></div>

        {skillsData.map((group) => (
          <div className={styles.group} key={group.category}>
            <h3>{group.category}</h3>

            <div className={styles.skills}>
              {group.skills.map((skill) => (
                <span className={styles.skill} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;