import Header from './modules/header/header';
import About from './modules/main/about/about';
import Hero from './modules/main/hero/hero';
import Projects from './modules/main/projects/projects';
import Footer from './modules/footer/footer';
import Contacts from './modules/main/contacts/contacts';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
