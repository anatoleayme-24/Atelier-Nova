import styles from "./Testimonials.module.css";

// Section "Ils nous ont fait confiance" : les avis clients
// testimonials : la partie "testimonials" du JSON
export default function Testimonials({ testimonials }) {
  // Cas vide : aucun témoignage, on n'affiche pas la section
  if (!testimonials.items || testimonials.items.length === 0) {
    return null;
  }

  return (
    <section className={styles.testimonials} aria-labelledby="temoignages-title">
      <div className={styles.inner}>
        <h2 id="temoignages-title" className={styles.title}>
          {testimonials.title}
        </h2>

        <ul className={styles.list}>
          {testimonials.items.map((item) => (
            <li key={item.author}>
              <figure className={styles.card}>
                <blockquote className={styles.quote}>
                  <p>« {item.quote} »</p>
                </blockquote>

                <figcaption className={styles.caption}>
                  <span className={styles.author}>{item.author}</span>
                  <span className={styles.role}>{item.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
