import { useHomepageContent } from "./hooks/useHomepageContent";
import Loading from "./components/ui/Loading";
import ErrorState from "./components/ui/ErrorState";
import Header from "./components/layout/Header";

function App() {
  const { content, error, retry } = useHomepageContent();

  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  if (!content) {
    return <Loading />;
  }

  return (
    <>
      <Header navigation={content.navigation} />
      <main id="main">
        <h1>{content.hero.title}</h1>
        <p>{content.hero.subtitle}</p>
      </main>
    </>
  );
}

export default App;
