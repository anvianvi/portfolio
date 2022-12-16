import './hero.css';

function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className='hero-content'>
        <h1 className='h1'>Hi, My name is Pavel Viarbitski</h1>
        <div className='hero-info'>Frontend focused Web Developer with a passion to create beautiful and functional Interfaces and Web Applications that leads to the success of the overall product</div>
        <a href='#projects' className='btn'>Projects</a>
      </div>
      <div className='hero-scroll'></div>
    </section>
  );
}

export default Hero;   
