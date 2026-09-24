import { useRef, useState } from "react";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

// En-tête du site : logo, navigation, bouton CTA et burger (mobile)
// navigation : la partie "navigation" du JSON
export default function Header({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // le menu est-il ouvert ?
  const burgerRef = useRef(null);                        // référence vers le burger

  const logoWords = navigation.logo.split(" ");

  function openMenu() {
    setIsMenuOpen(true);
  }

  // À la fermeture, on rend le focus au burger (important au clavier)
  function closeMenu() {
    setIsMenuOpen(false);
    burgerRef.current.focus();
  }

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

        <button
          ref={burgerRef}
          type="button"
          className={styles.burger}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={openMenu}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
               aria-hidden="true">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      <MobileMenu navigation={navigation} isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
