import Button from "../ui/Button";
import styles from "./CtaBanner.module.css";

// Bandeau d'appel à l'action "Un projet en tête ?"
// ctaBanner : la partie "ctaBanner" du JSON
export default function CtaBanner({ ctaBanner }) {
  return (
    <section id="contact" className={styles.banner} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 id="contact-title" className={styles.title}>
            {ctaBanner.title}
          </h2>
          <p className={styles.text}>{ctaBanner.text}</p>
        </div>

        <Button href={ctaBanner.cta.href}>{ctaBanner.cta.label}</Button>
      </div>
    </section>
  );
}
