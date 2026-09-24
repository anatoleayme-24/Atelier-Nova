import { useHomepageContent } from "./hooks/useHomepageContent";

function App() {
  const { content, error, retry } = useHomepageContent();

  // 1. En cas d'erreur
  if (error) {
    return (
      <div role="alert">
        <p>{error}</p>
        <button type="button" onClick={retry}>Réessayer</button>
      </div>
    );
  }

  // 2. Pendant le chargement
  if (!content) {
    return <p role="status">Chargement…</p>;
  }

  // 3. Les données sont là
  console.log(content);

  return (
    <main>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
    </main>
  );
}

export default App;
