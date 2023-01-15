import Header from './modules/header/header';
import About from './modules/main/about/about';
import Hero from './modules/main/hero/hero';
import Projects from './modules/main/projects/projects';
import Footer from './modules/footer/footer';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
