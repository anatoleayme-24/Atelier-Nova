import styles from "./ProjectCard.module.css";

// Récupère la largeur et la hauteur de l'image depuis son adresse picsum
// ".../nova-proj1/1200/900" donne { width: "1200", height: "900" }
function getImageSize(src) {
  const parts = src.split("/");
  return {
    width: parts[parts.length - 2],
    height: parts[parts.length - 1],
  };
}

// Une carte projet : image, nom, catégorie et ville
// project : un élément de la liste "projects.items" du JSON
export default function ProjectCard({ project }) {
  const size = getImageSize(project.image.src);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={size.width}
          height={size.height}
          loading="lazy"
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.meta}>
        {project.category} — {project.location}
      </p>
    </article>
  );
}
