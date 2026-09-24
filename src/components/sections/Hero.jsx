import Button from "../ui/Button";
import styles from "./Hero.module.css";

// Section d'accroche en haut de page
// hero : la partie "hero" du JSON
export default function Hero({ hero }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>

        {/* Colonne texte */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 id="hero-title" className={styles.title}>
            {hero.title}
          </h1>

          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className={styles.actions}>
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </div>
        </div>

        {/* Colonne image */}
        <div className={styles.media}>
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            width="1600"
            height="2000"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}
