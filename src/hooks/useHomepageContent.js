import { useEffect, useState } from "react";
import { getHomepageContent } from "../lib/cms";

// Hook qui récupère le contenu de la page d'accueil depuis le CMS
export function useHomepageContent() {
  const [content, setContent] = useState(null); // les données du JSON
  const [error, setError] = useState(null);     // le message d'erreur
  const [attempt, setAttempt] = useState(0);    // numéro de tentative (pour réessayer)

  useEffect(() => {
    // On repart de zéro à chaque tentative
    setContent(null);
    setError(null);

    // On lit ?simulateError=true dans l'URL
    const params = new URLSearchParams(window.location.search);
    const simulateError = params.get("simulateError") === "true";

    getHomepageContent({ simulateError })
      .then((data) => setContent(data))
      .catch((err) => setError(err.message));
  }, [attempt]); // relancé à chaque fois que "attempt" change

  // Réessayer = changer le numéro de tentative, ce qui relance le useEffect
  function retry() {
    setAttempt(attempt + 1);
  }

  return { content, error, retry };
}
