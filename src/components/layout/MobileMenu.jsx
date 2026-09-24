import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import styles from "./MobileMenu.module.css";

// Menu plein écran pour mobile
// navigation : la partie "navigation" du JSON
// isOpen : le menu est-il ouvert ? | onClose : fonction pour le fermer
export default function MobileMenu({ navigation, isOpen, onClose }) {
  // Une "référence" vers le bouton Fermer, pour pouvoir lui donner le focus
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Si le menu est fermé, on ne fait rien
    if (!isOpen) {
      return;
    }

    // 1. On place le focus clavier sur le bouton Fermer
    closeButtonRef.current.focus();

    // 2. On bloque le défilement de la page derrière le menu
    document.body.style.overflow = "hidden";

    // 3. La touche Échap ferme le menu
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    // 4. Nettoyage, quand le menu se ferme : on remet tout comme avant
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Menu fermé : on n'affiche rien
  if (!isOpen) {
    return null;
  }

  const logoWords = navigation.logo.split(" ");

  return (
    <div id="mobile-menu" className={styles.overlay}>
      <div className={styles.top}>
        <a href="#top" className={styles.logo} onClick={onClose}>
          {logoWords[0]} <em>{logoWords[1]}</em>
        </a>
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          Fermer
        </button>
      </div>

      <nav aria-label="Navigation principale" className={styles.nav}>
        <ul className={styles.links}>
          {navigation.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.cta}>
        <Button href={navigation.cta.href} variant="light" onClick={onClose}>
          {navigation.cta.label}
        </Button>
      </div>
    </div>
  );
}
