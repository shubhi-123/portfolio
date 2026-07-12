import styles from "./Projects.module.css";

const projects = [
  {
    title: "Offline AI Inference System",

    subtitle: "Local AI Assistant",

    description:
      "A privacy-focused AI application that runs the Gemma 3B large language model locally using Ollama. It enables offline inference through a Streamlit interface, allowing AI-powered interactions without relying on cloud services.",

    tech: ["Python", "Ollama", "Streamlit"],

    github: "https://github.com/shubhi-123/offline-chatbot",
  },

  {
    title: "ML Classification Pipeline",

    subtitle: "Diabetes Prediction",

    description:
      "An end-to-end machine learning pipeline that preprocesses healthcare data and trains a Logistic Regression model to predict diabetes. The project includes data preprocessing, model training, evaluation, and prediction.",

    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],

    github: "https://github.com/shubhi-123/diabetes-predictor",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div className={styles.card} key={project.title}>
              <h3>{project.title}</h3>

              <p className={styles.subtitle}>{project.subtitle}</p>

              <p className={styles.description}>{project.description}</p>

              <h4>Tech Stack</h4>

              <div className={styles.tech}>
                {project.tech.map((item) => (
                  <span className={styles.skill} key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.github}
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;