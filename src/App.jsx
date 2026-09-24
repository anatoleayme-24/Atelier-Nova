import { useHomepageContent } from "./hooks/useHomepageContent";
import Loading from "./components/ui/Loading";
import ErrorState from "./components/ui/ErrorState";

function App() {
  const { content, error, retry } = useHomepageContent();

  // 1. En cas d'erreur
  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  // 2. Pendant le chargement
  if (!content) {
    return <Loading />;
  }

  // 3. Les données sont là
  return (
    <main>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
    </main>
  );
}

export default App;
