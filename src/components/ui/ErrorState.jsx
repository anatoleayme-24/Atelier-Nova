import styles from "./ErrorState.module.css";

// Écran affiché si le contenu n'a pas pu être chargé
// message : le texte de l'erreur | onRetry : la fonction à lancer au clic
export default function ErrorState({ message, onRetry }) {
  return (
    <div className={styles.wrapper} role="alert">
      <p className={styles.logo}>Atelier <em>Nova</em></p>

      <h1 className={styles.title}>Le contenu n'a pas pu être chargé</h1>

      <p className={styles.text}>
        Vérifiez votre connexion, puis réessayez.
      </p>

      <button type="button" className={styles.button} onClick={onRetry}>
        Réessayer
      </button>

      <p className={styles.detail}>Détail : {message}</p>
    </div>
  );
}
