import styles from "./Button.module.css";

// Bouton-lien réutilisable
// href : où mène le lien | variant : "primary" (terracotta) ou "outline" (contour)
export default function Button({ href, children, variant = "primary" }) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}
