import Button from "../ui/Button";
import styles from "./Header.module.css";

// En-tête du site : logo, navigation, bouton CTA et burger (mobile)
// navigation : la partie "navigation" du JSON
export default function Header({ navigation }) {
  // "Atelier Nova" devient ["Atelier", "Nova"] pour mettre "Nova" en italique
  const logoWords = navigation.logo.split(" ");

  return (
    <header className={styles.header} id="top">
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          {logoWords[0]} <em>{logoWords[1]}</em>
        </a>

        <nav aria-label="Navigation principale" className={styles.nav}>
          <ul className={styles.links}>
            {navigation.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button href={navigation.cta.href} variant="outline">
            {navigation.cta.label}
          </Button>
        </div>

        {/* Bouton burger : visible seulement en mobile (fonctionnel plus tard) */}
        <button type="button" className={styles.burger} aria-label="Ouvrir le menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
               aria-hidden="true">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>
    </header>
  );
}
