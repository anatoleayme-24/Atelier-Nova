import styles from "./Services.module.css";

// Section "Notre approche" : la liste des services
// services : la partie "services" du JSON
export default function Services({ services }) {
  // Cas vide : aucun service, on n'affiche pas la section
  if (!services.items || services.items.length === 0) {
    return null;
  }

  return (
    <section id="approche" className={styles.services} aria-labelledby="approche-title">
      <div className={styles.inner}>
        <h2 id="approche-title" className={styles.title}>
          {services.title}
        </h2>

        <ol className={styles.list}>
          {services.items.map((service, index) => (
            <li key={service.id} className={styles.item}>
              {/* 0 devient "01", 1 devient "02"... */}
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.itemTitle}>{service.title}</h3>
              <p className={styles.text}>{service.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
