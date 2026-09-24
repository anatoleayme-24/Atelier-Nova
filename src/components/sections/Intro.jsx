import styles from "./Intro.module.css";

// Section "Le studio" : présentation + chiffres clés
// intro : la partie "intro" du JSON
export default function Intro({ intro }) {
  // Cas vide : on vérifie qu'il y a bien des chiffres à afficher
  const hasStats = intro.stats && intro.stats.length > 0;

  return (
    <section id="studio" className={styles.intro} aria-labelledby="studio-title">
      <div className={styles.inner}>

        <div className={styles.header}>
          <h2 id="studio-title" className={styles.title}>
            {intro.title}
          </h2>
          <p className={styles.text}>{intro.text}</p>
        </div>

        {/* Les chiffres ne s'affichent que s'il y en a */}
        {hasStats && (
          <dl className={styles.stats}>
            {intro.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.label}>{stat.label}</dt>
                <dd className={styles.value}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

      </div>
    </section>
  );
}
