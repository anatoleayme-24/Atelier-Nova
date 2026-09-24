import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

// Section "Projets récents"
// projects : la partie "projects" du JSON
export default function Projects({ projects }) {
  // Cas vide : s'il n'y a aucun projet, on n'affiche pas la section
  if (!projects.items || projects.items.length === 0) {
    return null;
  }

  return (
    <section id="projets" className={styles.projects} aria-labelledby="projets-title">
      <div className={styles.inner}>
        <h2 id="projets-title" className={styles.title}>
          {projects.title}
        </h2>

        <ul className={styles.list}>
          {projects.items.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
