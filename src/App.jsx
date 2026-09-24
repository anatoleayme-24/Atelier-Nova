import { useEffect, useState } from 'react';
import { getHomepageContent } from './lib/cms';
import './App.css';

/**
 * Point de départ du test.
 *
 * À vous de construire la homepage à partir des données renvoyées par
 * getHomepageContent() et de la direction artistique fournie
 * (voir DESIGN-DA.html à la racine du projet).
 *
 * Astuce : ajoutez ?simulateError=true à l'URL pour tester votre gestion
 * d'erreur, par ex. http://localhost:5173/?simulateError=true
 */
function App() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const simulateError = params.get('simulateError') === 'true';

    getHomepageContent({ simulateError })
      .then(setContent)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="state state--error">{error}</div>;
  }

  if (!content) {
    return <div className="state state--loading">Chargement…</div>;
  }

  // TODO : c'est ici que ça commence.
  // Construisez la homepage (Header, Hero, Intro, Services, Projects,
  // Testimonials, CtaBanner, Footer) à partir de `content`, en suivant
  // la DA fournie dans DESIGN-DA.html.
  return (
    <main>
      <p>Contenu du CMS mocké chargé avec succès — à vous de jouer 🎨</p>
    </main>
  );
}

export default App;
