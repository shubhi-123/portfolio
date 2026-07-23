import styles from "./Skills.module.css";

const skills = [
  {
    title: "Languages",
    items: [
      "Python",
      "C++",
      "JavaScript",
      "SQL",
    ],
  },

  {
    title: "Machine Learning",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "OpenCV",
      "SciPy",
      "Streamlit",
    ],
  },

  {
    title: "Data Analytics & Visualization",
    items: [
      "Excel",
      "Power BI",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    title: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "React.js",
      "Flask",
      "REST APIs",
    ],
  },

  {
    title: "Databases",
    items: [
      "MySQL",
      "MongoDB",
    ],
  },

  {
    title: "Developer Tools & Cloud",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Postman",
      "Google Cloud Platform",
      "Amazon Web Services",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.underline}></div>

        {skills.map((group) => (
          <div className={styles.group} key={group.title}>
            <h3>{group.title}</h3>

            <div className={styles.skills}>
              {group.items.map((skill) => (
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