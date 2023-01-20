import Header from './modules/header/header';
import Hero from './modules/main/hero/hero';
import About from './modules/main/about/about';
import Projects from './modules/main/projects/projects';
import Contacts from './modules/main/contacts/contacts';
import Footer from './modules/footer/footer';

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
