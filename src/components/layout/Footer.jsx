import styles from "./Footer.module.css";

// Pied de page : logo, colonnes de liens, réseaux sociaux, mentions légales
// footer : la partie "footer" du JSON
export default function Footer({ footer }) {
  const logoWords = footer.logo.split(" ");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.top}>
          {/* Logo, baseline et réseaux sociaux */}
          <div className={styles.brand}>
            <p className={styles.logo}>
              {logoWords[0]} <em>{logoWords[1]}</em>
            </p>
            <p className={styles.baseline}>{footer.baseline}</p>

            <ul className={styles.social}>
              {footer.social.map((network) => (
                <li key={network.label}>
                  <a href={network.href} className={styles.link}>
                    {network.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Les colonnes de liens : Studio, Projets, Contact */}
          <div className={styles.columns}>
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className={styles.column}>
                <p className={styles.columnTitle}>{column.title}</p>
                <ul className={styles.columnLinks}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className={styles.legal}>{footer.legal}</p>

      </div>
    </footer>
  );
}
