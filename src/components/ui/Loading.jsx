import styles from "./Loading.module.css";

// Silhouette de la page affichée pendant le chargement
export default function Loading() {
  return (
    <div className={styles.wrapper} role="status">
      {/* Texte lu par les lecteurs d'écran, invisible à l'écran */}
      <span className="visually-hidden">Chargement du contenu…</span>

      <div className={styles.logo}></div>
      <div className={styles.eyebrow}></div>
      <div className={styles.title}></div>
      <div className={styles.title}></div>
      <div className={styles.text}></div>
      <div className={styles.text}></div>
      <div className={styles.button}></div>
      <div className={styles.image}></div>
    </div>
  );
}
