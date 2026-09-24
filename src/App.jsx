import { useHomepageContent } from "./hooks/useHomepageContent";
import Loading from "./components/ui/Loading";
import ErrorState from "./components/ui/ErrorState";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import CtaBanner from "./components/sections/CtaBanner";

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
        <Hero hero={content.hero} />
        <Intro intro={content.intro} />
        <Projects projects={content.projects} />
        <Services services={content.services} />
        <Testimonials testimonials={content.testimonials} />
        <CtaBanner ctaBanner={content.ctaBanner} />
      </main>

      <Footer footer={content.footer} />
    </>
  );
}

export default App;
