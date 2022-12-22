import Header from './modules/header/header';
import About from './modules/main/about/about';
import Hero from './modules/main/hero/hero';
import Projects from './modules/main/projects/projects';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Projects />
      </main>

    </>
  );
}

export default App;
