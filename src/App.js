import Header from './modules/header/header';
import About from './modules/main/about/about';
import Hero from './modules/main/hero/hero';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />

      </main>

    </>
  );
}

export default App;
